const req = require("express/lib/request")
const jwt = require('jsonwebtoken')
const { Op } = require("sequelize");
const Ambassador = require("../Model/ambassador");
module.exports = {
    loginService: function(req, res, next){
        var email=req.body.email
        var password= req.body.password
        console.log(email)
        Ambassador.findAll({
            where: {
                [Op.and]: [
                    { email: email },
                    { password: password}
                ]
            }
        }).then((result) => {
            if(result.length == 1){
                var user = result[0]
                console.log(user)
                jwt.sign({
                    user: user,
                    role: 'ambassador'
                }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
                    res.json({
                        'status':true,
                        'token':token,
                        'statusCode':200
                    })
                })
            } else if(result.length>1){
                res.json({
                    'status':false,
                    'msg':'Contact Admin',
                    'statusCode': 500
                })
            } else {
                res.json({
                    'status':false,
                    'msg':'Wrong Credencials',
                    'statusCode': 503
                })
            }
        }).catch((error)=>{
            console.log(error)
            res.send(error)
        })
    },
    loginViaAdminService: function(req,res,next){
        var email=req.body.email
        console.log(email)
        Ambassador.findAll({
            where: {
                [Op.and]: [
                    { email: email },
                    { status: true }
                ]
            }
        }).then((result) => {
            if(result.length == 1){
                var user = result[0]
                console.log(user)
                jwt.sign({
                    user: user,
                    role: 'ambassador'
                }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
                    res.json({
                        'status':true,
                        'token':token,
                        'statusCode':200
                    })
                })
            } else if(result.length>1){
                res.json({
                    'status':false,
                    'msg':'Contact Admin',
                    'statusCode': 500
                })
            } else {
                res.json({
                    'status':false,
                    'msg':'Client does not exist',
                    'statusCode': 503
                })
            }
        }).catch((error)=>{
            console.log(error)
            res.send(error)
        })
    }
}