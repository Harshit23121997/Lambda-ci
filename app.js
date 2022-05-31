const express = require('express')
const adminloginController = require('./src/Admin/Controller/LoginController')
const adminController = require('./src/Admin/Controller/AdminController')
const clientloginController = require('./src/Client/Controller/LoginController')
const ambassadorloginController = require('./src/Ambassdor/Controller/LoginController')
const clientController = require('./src/Client/Controller/ClientController')
const customCampaignController = require('./src/Custom-Campaign/Controller/CustomCampaignController')
const socialCampaignController = require('./src/Social-Campaign/Controller/SocialCampaignController')
const ambassadorController = require('./src/Ambassdor/Controller/AmbassadorController')
const userController = require('./src/UserController')
var cors = require('cors')

var app = express();



var router= express.Router();
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies


app.use(cors())
const fileupload = require("express-fileupload");
app.use(fileupload());



app.use('/login/admin',adminloginController)
app.use('/admin',adminController)
app.use('/login/client',clientloginController)
app.use('/client',clientController)
app.use('/login/ambassador',ambassadorloginController)
app.use('/campaign/custom',customCampaignController)
app.use('/campaign/social',socialCampaignController)
app.use('/mail',userController)
app.use('/ambassador', ambassadorController)

app.get('/', function (req,res){
    res.send("Hello World")
})



module.exports = app;
