const req = require("express/lib/request")
const { makeid } = require("../../../util/Constants/roles");
const { sendMail1 } = require("../../util/sendMail");
const Client = require("../Model/client")
const jwt = require('jsonwebtoken');
const { uploadFile, uploadFileClient } = require("../../../util/s3");
const { v4: uuidv4 } = require('uuid');
// jwt.sign({
//     user: user,
//     role: 'client'
// }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
//     res.json({
//         'status':true,
//         'token':token,
//         'statusCode':200
//     })
// })
module.exports = {
    createClientService:async function(req,res,next){
        // console.log(makeid(10))
        req.body.client.password = makeid(10)
        req.body.client = JSON.parse(req.body.client)
        req.body.client.password = makeid(10)
        let myImage = req.files.image.name.split(".")
        const type = myImage[myImage.length - 1]
        req.body.client.client_img = `afleet/client/`+`${uuidv4()}.${type}`
        console.log(req.body.client)
        const client =await Client.create(req.body.client).catch((e)=>{
            res.send(e)
        })
        console.log("Here")
        jwt.sign({
            user: client,
            role: 'client'
        }, process.env.SECRET_KEY,{expiresIn:  '2d'}, (err,token) =>{
            sendMail1(client.email, "Create Password",false,true,token,next)
            console.log("req.body.client")
            console.log(req.body.client)
            uploadFileClient(req,res,next)
            res.json({
                'status':true,
                'msg':"Client created successfully and mail is sent to create password",
                'statusCode':200
            })
        })
    },
    fetchAllClientService: function(req,res,next) {
        const clients = Client.findAll({attributes: ['id', 'first_name', 'last_name','email','client_img','role','status']}).then((result) => {
            res.json(result)
        }).catch(error =>{
            res.json(error)
        })
    },
    updateClientService: function(req,res,next){
        const client = Client.update(req.body.client,
            {
                where:
                    {
                        id: req.body.client.id
                    }
            }).then((result) => {
            res.json(req.body.client)
        }).catch((error) =>{
            console.log(error)
            res.json(error)
        })
    }

}