const req = require("express/lib/request")
const sequelize = require("../../../util/database")
const Custom_Campaign = require("../Model/CustomCampaign")
const Custom_Campaign_Task = require("../Model/CustomCampaignTask")

module.exports = {
    fetchCustomCampaigns: function(req,res,next){
        const custom_campaign = Custom_Campaign.findAll().then((result) => {
            res.json(
                result
            )
        }).catch(error => {
            res.json(error)
        })
    },
    createCustomCampaignService: async function (req, res, next) {
        console.log(req.body.custom_campaign)
        console.log(req.body.custom_task)
        const t = await sequelize.transaction();
        try {
            console.log("try start")
            const customCampaign = await Custom_Campaign.create(req.body.custom_campaign, {
                transaction: t
            })
            console.log("tasks")
            var result = await req.body.custom_task.map(function (el) {
                var o = Object.assign({}, el);
                o.custom_campaign_id = customCampaign.id;
                return o;
            })
            console.log(result)
            const customTask = await Custom_Campaign_Task.bulkCreate(result, {
                transaction: t
            })
            t.commit();
            res.json({
                "status": "ok",
                "msg": "campaign is created with " + req.body.custom_task.length + " tasks"
            })
        } catch (e) {
            console.log(e)
            res.json("Error" + e)
            t.rollback();
            
        }


    },
    updateCustomCampaignService:function (req, res, next) {
        console.log(req.body.custom_campaign)
        const custom_campaign = Custom_Campaign.update(req.body.custom_campaign, {
            where:
            {
                id: req.body.custom_campaign.id
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
    deleteCustomCampaignService: function (req, res, next) {
        console.log(req.body.custom_campaign)
        const custom_campaign = Custom_Campaign.destroy({
            where:
            {
                id: req.body.custom_campaign.id
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