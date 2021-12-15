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
            
        }
    } 
    return HomeController;
}