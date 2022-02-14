require('dotenv/config')
const http = require('http');
const app = require('./config/express')(); //deve ser como funcão

const port = process.env.PORT_DEV;

http.createServer(app).listen(port, ()=>{
    console.log(`Listem port ${port}`)
})