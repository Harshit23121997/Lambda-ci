const req = require("express/lib/request")
const Custom_Campaign_Task = require("../Model/CustomCampaignTask")

module.exports = {
    getCustomTasks: function(req,res,next){
        const tasks = Custom_Campaign_Task.findAll({
            where:
            {
                custom_campaign_id: req.body.custom_campaign.custom_campaign_id
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