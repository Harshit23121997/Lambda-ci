const req = require("express/lib/request")
const Social_Campaign_Task = require("../Model/SocialCampaignTask")

module.exports = {
    getSocialTasks: function(req,res,next){
        const tasks = Social_Campaign_Task.findAll({
            where:
            {
                social_campaign_id: req.body.social_campaign.social_campaign_id
            }
        }).then(result=>{
            res.send(result)
        })
        
    },
    createSocialCampaignTaskService: function (req, res, next) {
        console.log(req.body.social_campaign_task)
        const socialCampaignTask = Social_Campaign_Task.create(req.body.social_campaign_task).then((result) => {
            res.json(result)
        }).catch((error) => {
            res.json(error)
        })
    }

}