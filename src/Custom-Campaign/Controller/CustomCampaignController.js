const express = require('express');
const { verifyTokenClient } = require('../../validate');
const { createCustomCampaignService, updateCustomCampaignService, deleteCustomCampaignService, fetchCustomCampaigns } = require('../Service/CustomCamapaignService');
const { getCustomTasks } = require('../Service/CustomCampaignTaskService');
var router = express.Router();

router.get('/get', verifyTokenClient, function(req,res,next){
    fetchCustomCampaigns(req,res,next)
})

router.post('/create' ,verifyTokenClient, function(req,res,next){
    console.log("Cusrom Campaign Here")
    createCustomCampaignService(req,res,next)
})

router.put('/update', verifyTokenClient, function(req,res,next){
    updateCustomCampaignService(req,res,next)
})

router.delete('/delete', verifyTokenClient, function(req,res,next){
    deleteCustomCampaignService(req,res,next)
})

router.post('/tasks', verifyTokenClient, function(req,res,next){
    getCustomTasks(req,res,next)
})
module.exports = router