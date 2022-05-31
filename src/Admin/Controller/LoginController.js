const express = require('express')
var router = express.Router();
var {loginService} = require('./../Service/LoginService')

router.post('/',function(req,res,next){
    var user=req.body.user
    var pass= req.body.password
    loginService(req,res,next)
})



module.exports = router