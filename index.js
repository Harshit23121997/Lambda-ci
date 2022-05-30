const express = require('express')
const http = require('http')

var app = express();   
var cors = require('cors') 

//AKIAZQSXQGB4HXAJLQDN
//O8uaXb80lxkoek57v/hcRzX9c1m2nUTjzREwWta


var httpServer = http.createServer(app);
app.use(cors())

app.get('/', function (req,res){
    console.log("Here")
    res.send("Hello Wosrld1")
})



const server = httpServer.listen(3000,()=>{
    console.log("Server is running")
})