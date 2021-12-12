const mongoose = require('mongoose');

function dataBaseConnectionMongoDB(){
   return mongoose.connect('mongodb://localhost:27017/nodeJS',
   )
        .then(()=>{
            console.log(`Connect, MongoDB`)
        })
        .catch((err)=>{
            console.log(`Not connect, ERROR:${err}`);
        });
}

module.exports = {dataBaseConnectionMongoDB}
   