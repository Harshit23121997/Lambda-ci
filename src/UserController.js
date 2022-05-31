const express = require('express');
const { uploadFile } = require('../util/s3');
const { sendMail1 } = require('./util/sendMail');
var router = express.Router();

router.get('/',function(req,res,next){
   console.log("here")
    sendMail1('g','sdsad')
    res.send("ok")
})

router.post('/image',function(req,res,next){
    if(!req.files)
        console.log("Not found")
    else
        console.log("Found")
    // const fileStream = fs.createReadStream(file.path);
    console.log(req.files.image)
    uploadFile(req,res,next)
 })



module.exports = router