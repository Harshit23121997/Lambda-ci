const express = require('express');
const {  verifyTokenAdmin, verifyTokenClient, verifyTokenAmbassador } = require('../../validate');
const { createAmbassadorProgramRewardService } = require('../Service/AmbassadorProgramRewardsService');
const { createAmbassadorProgramService, fetchAmbassadorProgramService, updateAmbassadorProgramService, deleteAmbassadorProgramService } = require('../Service/AmbassadorProgramService');
const { createAmbassadorService, fetchAllAmbassadorService, updateAmbassadorService, deleteAmbassadorService } = require('../Service/AmbassadorService');

var router = express.Router();

router.post('/create',verifyTokenClient ,function(req,res,next){
    console.log("Here")
    createAmbassadorService(req,res,next)
})

router.get('/getAll', verifyTokenClient, function(req,res,next){
    fetchAllAmbassadorService(req,res,next)
})

router.put('/update', verifyTokenClient, function(req,res,next){
    updateAmbassadorService(req,res,next)
})

router.delete('/delete', verifyTokenClient, function(req,res,next){
    deleteAmbassadorService(req,res,next)
})

router.post('/program/create',verifyTokenClient ,function(req,res,next){
    console.log("Here")
    createAmbassadorProgramService(req,res,next)
})

router.post('/program/get', verifyTokenClient, function(req,res,next){
    fetchAmbassadorProgramService(req,res,next)
})

router.put('/program/update', verifyTokenClient, function(req,res,next){
    updateAmbassadorProgramService(req,res,next)
})

router.delete('/program/delete', verifyTokenClient, function(req,res,next){
    deleteAmbassadorProgramService(req,res,next)
})

router.post('/programRewards/create', verifyTokenAmbassador, function(req,res,next){
    createAmbassadorProgramRewardService(req,res,next)
})


module.exports = router