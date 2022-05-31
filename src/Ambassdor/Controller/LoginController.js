const express = require('express');
const { loginService } = require('../Service/LoginService');
var router = express.Router();

router.post('/',function(req,res,next){
    console.log("Here")
    loginService(req,res,next)
})



module.exports = router