const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./connection');

module.exports = ()=>{

    //app
     const app = express();

    //milldlewares
      app.use(cors());
      app.use(bodyParser.urlencoded({extended:true}));
      app.use(bodyParser.json());

    //connect databse
    db.dataBaseConnectionMongoDB();
    
    consign({cwd: 'app'})
        .then('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}