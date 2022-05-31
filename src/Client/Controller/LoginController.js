const express = require('express');
const { verifyTokenAdmin } = require('../../validate');
const { loginService, loginViaAdminService } = require('../Service/LoginService');
var router = express.Router();

router.post('/',function(req,res,next){
    var user=req.body.user
    var pass= req.body.password
    loginService(req,res,next)
})

router.post('/mimic',verifyTokenAdmin, function(req,res,next){
    loginViaAdminService(req,res,next)
})



module.exports = router