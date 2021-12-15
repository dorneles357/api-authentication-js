const User = require('../models/user');

module.exports = ()=>{
    const HomeController = {
        index(req, res){
            console.log(req.body);
        },
        show(req, res){
            const users = ["Naruto", "goku", "Saitama", "Hantaro"];

            return res.status(200).json({
                error: false,
                users
            })
        }
    } 
    return HomeController;
}