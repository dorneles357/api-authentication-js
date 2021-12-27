const mongoose = require('mongoose');

function dataBaseConnectionMongoDB(){
   return mongoose.connect('mongodb://127.0.0.1/nodeJS',
   )
        .then(()=>{
            console.log(`Connect, MongoDB`)
        })
        .catch((err)=>{
            console.log(`Not connect, ERROR:${err}`);
        });
}

module.exports = {dataBaseConnectionMongoDB}
   