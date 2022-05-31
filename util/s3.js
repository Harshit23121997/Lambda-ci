const { v4: uuidv4 } = require('uuid');
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs")
const multer = require('multer');
const { nextTick } = require('process');


const s3 = new S3([
    process.env.AWS_BUCKET_REGION,
    process.env.AWS_ACCESS_KEY,
    process.env.AWS_SECRET_KEY,  
])

const storage = multer.memoryStorage({
    destination: function(req,file,callback){
        callback(null,'')
    }
})

const upload = multer({storage}).single('image')

module.exports = {
    uploadFile:async function(req) {
        
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.body.admin.admin_img , // File name you want to save as in S3
            Body: req.files.image.data
        };
        console.log("Heres3")
        s3.upload(params,(error,data)=>{
            if(error)
                console.log(error)
            else{
                return true
            }
        })
    },
    uploadFileClient:async function(req,res,next) {
        console.log(req.body.client)
        
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: req.body.client.client_img , // File name you want to save as in S3
            Body: req.files.image.data
        };
        console.log("Heres3")
        await s3.upload(params,(error,data)=>{
            if(error)
                console.log(error)
            else{
                next()
            }
        })
    }
}

