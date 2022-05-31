const express = require('express');
const { verifyTokenClient } = require('../../validate');
const { createSocialCampaignService, updateSocialCampaignService, deleteSocialCampaignService, fetchSocialCampaigns } = require('../Service/SocialCamapaignService');
const { getSocialTasks } = require('../Service/SocialCampaignTaskService');
var router = express.Router();

router.get('/get',verifyTokenClient,function(req,res,next){
    fetchSocialCampaigns(req,res,next)
})

router.post('/create' ,verifyTokenClient, function(req,res,next){
    console.log("Social Campaign Here")
    createSocialCampaignService(req,res,next)
})

router.put('/update', verifyTokenClient, function(req,res,next){
    updateSocialCampaignService(req,res,next)
})

router.delete('/delete', verifyTokenClient, function(req,res,next){
    deleteSocialCampaignService(req,res,next)
})

router.post('/tasks', verifyTokenClient, function(req,res,next){
    getSocialTasks(req,res,next)
})

module.exports = router