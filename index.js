const express = require('express')
const http = require('http')

var app = express();    


var httpServer = http.createServer(app);

app.get('/', function (req,res){
    console.log("Here")
    res.send("Hello World1")
})



const server = httpServer.listen(3000,()=>{
    console.log("Server is running")
})