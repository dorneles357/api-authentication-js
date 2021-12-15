const User = require('../models/user');

module.exports = ()=>{
    const HomeController = {
        show(req, res){
            const users = ["Naruto", "goku", "Saitama", "Hantaro"];

            return res.status(200).json({
                error: false,
                users
            })
        }, 
        async store(req, res){
        //input data
         const {name, email, password} = req.body;
         const data = {name, email, password};

         
         //create 
         await User.create(data, (err)=> {
            if(err)
                return res.status(400).json({
                    error: true,
                    message: "Not Create"
                });
            else
                return res.status(200).json({
                    error: false,
                    message: "Yes create"
                });
         });
        }
    } 
    return HomeController;
}