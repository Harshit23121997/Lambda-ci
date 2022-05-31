const express = require('express');
const {  verifyTokenAdmin } = require('../../validate');
const { createClientService, fetchAllClientService, updateClientService } = require('../Service/CientService');
var router = express.Router();

router.post('/create',verifyTokenAdmin ,function(req,res,next){
    console.log("Here")
    createClientService(req,res,next)
})

router.get('/getAll', verifyTokenAdmin, function(req,res,next){
    fetchAllClientService(req,res,next)
})

router.put('/update', verifyTokenAdmin, function(req,res,next){
    updateClientService(req,res,next)
})

module.exports = router