const config = require('../../config/auth');
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (app)=>{
    const User = app.models.user;
    const AuthController = {
        async index(req, res){
            const {email, password} = req.body;

            const userExist = await User.findOne({email})

            if(!userExist){
                res.status(400).json({
                    error: true,
                    message: "Erro, not possible authentication"
                });
            }
            if(!(await bcrypt.compare(password, userExist.password))){
                res.status(400).json({
                    error: true, 
                    message: "not possible authentication"
                });
            }
            return res.status(200).json({
                user:{
                    name : userExist.name, 
                    email : userExist.email
                },
                token: jwt.sign({id: userExist._id}, config.secrets, {expiresIn : config.expireIn})
            });
        }

    }
    return AuthController;
}