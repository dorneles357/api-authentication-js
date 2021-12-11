require('dotenv')
const http = require('http');
const app = require('./config/express')(); //deve ser como funcão

const port = process.env.PORT || 8080;

http.createServer(app).listen(port, ()=>{
    console.log(`Listem port ${port}`)
})