const mongoose = require('mongoose');

function dataBaseConnectionMongoDB(){
   return mongoose.connect(process.env.DB_DEV,
   )
        .then(()=>{
            console.log(`Connect, MongoDB`)
        })
        .catch((err)=>{
            console.log(`Not connect, ERROR:${err}`);
        });
}

module.exports = {dataBaseConnectionMongoDB}
   