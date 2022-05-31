const express = require('express');
const { createPackageService, fetchAllPackages } = require('../../Program-Package/Service/ProgramPackageService');
const { verifyToken } = require('../../validate');
var router = express.Router();

router.post('/create',verifyToken ,function(req,res,next){
    console.log("Here")
    createPackageService(req,res,next)
})


module.exports = router