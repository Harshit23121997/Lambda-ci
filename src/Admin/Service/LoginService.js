const req = require("express/lib/request")
const Admin = require("../Model/admin")
const jwt = require('jsonwebtoken')
const { Op } = require("sequelize");
module.exports = {
    loginService: function(req, res, next){
        var email=req.body.email
        var password= req.body.password
        Admin.findAll({
            where: {
                [Op.and]: [
                    { email: email },
                    { password: password}
                ]
            }
        }).then((result) => {
            if(result.length == 1){
                var role = "admin"
                if (result[0].superadmin){
                    role = "superadmin"
                }
                jwt.sign({
                    user: result[0],
                    role:role
                }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
                    res.json({
                        'status':true,
                        'tokenString':token,
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
    }
}