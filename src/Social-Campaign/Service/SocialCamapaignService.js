const req = require("express/lib/request")
const sequelize = require("../../../util/database")
const Social_Campaign = require("../Model/SocialCampaign")
const Social_Campaign_Task = require("../Model/SocialCampaignTask")

module.exports = {
    fetchSocialCampaigns: function(req,res,next){
        const social_campaign = Social_Campaign.findAll().then((result) => {
            res.json(
                result
            )
        }).catch(error => {
            res.json(error)
        })
    },
    createSocialCampaignService: async function (req, res, next) {
        console.log(req.body.social_campaign)
        console.log(req.body.social_task)
        const t = await sequelize.transaction();
        try {
            console.log("try start")
            const socialCampaign = await Social_Campaign.create(req.body.social_campaign, {
                transaction: t
            })
            console.log("tasks")
            var result = await req.body.social_task.map(function (el) {
                var o = Object.assign({}, el);
                o.social_campaign_id = socialCampaign.id;
                return o;
            })
            console.log(result)
            const socialTask = await Social_Campaign_Task.bulkCreate(result, {
                transaction: t
            })
            t.commit();
            res.json({
                program: req.body.social_task
            })
        } catch (e) {
            t.rollback();
            res.json("Error"+e)
        }


    },
    updateSocialCampaignService:function (req, res, next) {
        console.log(req.body.social_campaign)
        const social_campaign = Social_Campaign.update(req.body.social_campaign, {
            where:
            {
                id: req.body.social_campaign.id
            }
        }).then((result) => {

            res.json({
                "status": "ok",
                "msg": "campaign is updated successfully"
            })
        }).catch((error) => {
            res.statusCode = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    },
    deleteSocialCampaignService: function (req, res, next) {
        console.log(req.body.social_campaign)
        const social_campaign = Social_Campaign.destroy({
            where:
            {
                id: req.body.social_campaign.id
            }
        }).then((result) => {

            res.json({
                "status": "ok",
                "msg": "campaign is deleted successfully"
            })
        }).catch((error) => {
            res.statusCode = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    }

}