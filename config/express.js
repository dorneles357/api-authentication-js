const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = ()=>{
    //app
     const app = express();

    //milldlewares
      app.use(bodyParser.urlencoded({extended:true}));
      app.use(bodyParser.json());
 
    
    consign({cwd: 'app'})
        .then('models')
        .then('controllers')
        .then('routes')
        .into(app);

    return app;
}