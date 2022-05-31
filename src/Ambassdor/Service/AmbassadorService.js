const req = require("express/lib/request")
const { makeid } = require("../../../util/Constants/roles")
const Ambassador = require("../Model/ambassador");

module.exports = {
    createAmbassadorService: function (req, res, next) {
        // console.log(makeid(10))
        req.body.ambassador.password = makeid(10);
        console.log(req.body.ambassador.password)
        const ambassador = Ambassador.create(req.body.ambassador)
            .then((result) => {
                res.json({
                    "status": "ok",
                    "msg": "Ambassador is created successfully"
                })
            }).catch((error) => {
                console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
            })
    },
    fetchAllAmbassadorService: function (req, res, next) {
        const clients = Ambassador.findAll({ attributes: ['id', 'first_name', 'last_name', 'email', 'ambassador_img', 'other_details', 'status'] }).then((result) => {
            res.json(result)
        }).catch(error => {
            console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    },
    updateAmbassadorService: function (req, res, next) {
        const client = Ambassador.update(req.body.ambassador,
            {
                where:
                {
                    id: req.body.ambassador.id
                }
            }).then((result) => {
                res.json({
                    "status": "ok",
                    "msg": "Ambassador is updated successfully"
                })
            }).catch((error) => {
                console.log(error)
                res.setStatus = 400
                res.json({
                    "status": false,
                    "msg": error.name
                })
            })
    },
    deleteAmbassadorService: function (req, res, next) {
        const client = Ambassador.destroy({
            where:
            {
                id: req.body.ambassador.id
            }
        }).then((result) => {
            res.json({
                "status": "ok",
                "msg": "Ambassador is deleted successfully"
            })
        }).catch((error) => {
            console.log(error)
            res.setStatus = 400
            res.json({
                "status": false,
                "msg": error.name
            })
        })
    }

}