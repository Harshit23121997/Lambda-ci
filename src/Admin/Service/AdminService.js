const req = require("express/lib/request")
const sequelize = require("../../../util/database")
const { makeid } = require("../../../util/Constants/roles")
const Admin = require("../Model/admin")
const jwt = require('jsonwebtoken')
const { sendMail1 } = require("../../util/sendMail")
const { uploadFile } = require("../../../util/s3")
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createAdminService:async function (req, res, next) {
        req.body.admin.password = makeid(10)
        req.body.admin = JSON.parse(req.body.admin)
        req.body.admin.password = makeid(10)
        console.log(req.files)
        let myImage = req.files.image.name.split(".")
        const type = myImage[myImage.length - 1]
        req.body.admin.admin_img = `afleet/admin/`+`${uuidv4()}.${type}`
        console.log(req.body.admin)
        
        
        let [upload, admin] = await Promise.all([uploadFile(req,res,next), Admin.create(req.body.admin)]).catch(
            (e)=>{
                res.send(e)
            }
        );
        console.log(admin.id)
        console.log("Here")
        console.log(upload)
        jwt.sign({
            user: admin,
            role: 'admin'
        }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
            sendMail1(admin.email, "Create Password",false,true,token,next)
            console.log("req.body.admin")
            console.log(req.body.admin)
            res.json({
                'status':true,
                'msg':"Admin created successfully and mail is sent to create password",
                'statusCode':200
            })
        })
        res.json({
            'status':true,
            'msg':"Admin created successfully and mail is sent to create password",
            'statusCode':200
        })
        
        

    },
    updateAdminService: function (req, res, next) {
        const admin = Admin.update(req.body.admin,
            {
                where:
                {
                    id: req.body.admin.id
                }
            }).then((result) => {
                res.json(req.body.admin)
            }).catch((error) => {
                console.log(error)
                res.json(error)
            })
    },
    deleteAdminService: function (req, res, next) {
        const admin = Admin.destroy(
            {
                where:
                {
                    id: req.body.admin.id
                }
            }).then((result) => {
                console.log(result)
                res.json({
                    "status": "ok",
                "msg": "admin is deleted successfully"
                })
            }).catch((error) => {
                console.log(error)
                res.json(error)
            })
    },
    fetchAdminService: function (req, res, next) {
        const admins = Admin.findAll({ attributes: ['id', 'first_name', 'last_name', 'email', 'admin_img', 'superadmin','country', 'contact'] }).then((result) => {
            res.json({
                "admins":result
            })
        }).catch(error => {
            res.json(error)
        })
    },
    countUsers: function (req, res, next) {
        const users = sequelize.query(`Select
        (SELECT count(*) from AFLEET_DB.AFLEET_ADMIN ) as admins,
        (SELECT count(*) from AFLEET_DB.AFLEET_CLIENT ) as clients,
        (SELECT count(*) FROM AFLEET_DB.AFLEET_AMBASSADOR) as ambassadors`, {
            type: sequelize.QueryTypes.SELECT
        }).then(result => {
            res.json({
                "count": result[0]
            })
        }).catch(e => {
            res.json(e)
        })
    }

}