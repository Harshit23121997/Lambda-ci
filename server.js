const http = require('http')
const sequelize =  require('./util/database')
const Admin = require('./src/Admin/Model/admin')
const Client = require('./src/Client/Model/client')
const Program = require('./src/Program/Model/program')
const ProgramPackage = require('./src/Program-Package/Model/program-package')
const Custom_Campaign = require('./src/Custom-Campaign/Model/CustomCampaign')
const Custom_Campaign_Task = require('./src/Custom-Campaign/Model/CustomCampaignTask')
const Social_Campaign = require('./src/Social-Campaign/Model/SocialCampaign')
const Social_Campaign_Task = require('./src/Social-Campaign/Model/SocialCampaignTask')
const Program_Rewards = require('./src/Program/Model/program-rewards')
const Ambassador = require('./src/Ambassdor/Model/ambassador')
const Ambassador_Program = require('./src/Ambassdor/Model/ambassador-program')
const Ambassador_Program_Rewards = require('./src/Ambassdor/Model/ambassador-program-rewards')
const Ambassador_Program_Custom_Campaign = require('./src/Ambassdor/Model/ambassador-program-custom-campaign')
const Ambassador_Program_Social_Campaign = require('./src/Ambassdor/Model/ambassador-program-social-campaign')


process.on("uncaughtException", err =>{
    console.log("Shutting Down Server"+err.stack)
    process.exit(1)
})
const app = require('./index');
var httpServer = http.createServer(app);

Program.belongsTo(ProgramPackage,{
    foreignKey: 'package_id',
    onDelete: 'NO ACTION',
    onUpdate: 'No ACTION'
})


Custom_Campaign.belongsTo(Program,{
    foreignKey: 'program_id',
    onDelete: 'CASCADE'
})

Social_Campaign.belongsTo(Program,{
    foreignKey: 'program_id',
    onDelete: 'CASCADE'
})

Program_Rewards.belongsTo(Program,{
    foreignKey: 'program_id',
    onDelete: 'CASCADE'
})
Ambassador_Program.belongsTo(Ambassador,{
    foreignKey: 'ambassador_id',
    onDelete: 'CASCADE'
})

Ambassador_Program.belongsTo(Program,{
    foreignKey: 'program_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Rewards.belongsTo(Program_Rewards,{
    foreignKey: 'prog_reward_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Rewards.belongsTo(Ambassador_Program,{
    foreignKey: 'amb_prog_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Custom_Campaign.belongsTo(Ambassador_Program,{
    foreignKey: 'amb_prog_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Custom_Campaign.belongsTo(Custom_Campaign,{
    foreignKey: 'custom_camp_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Social_Campaign.belongsTo(Ambassador_Program,{
    foreignKey: 'amb_prog_id',
    onDelete: 'CASCADE'
})

Ambassador_Program_Social_Campaign.belongsTo(Social_Campaign,{
    foreignKey: 'social_camp_id',
    onDelete: 'CASCADE'
})

Custom_Campaign_Task.belongsTo(Custom_Campaign,{
    foreignKey: 'custom_campaign_id',
    onDelete: 'CASCADE'
})

Social_Campaign_Task.belongsTo(Social_Campaign,{
    foreignKey: 'social_campaign_id',
    onDelete: 'CASCADE'
})

sequelize.sync().then((result) =>{
    console.log(result);
})
.catch((err)=>{
    console.log(err)
})

const server = httpServer.listen(process.env.PORT,()=>{
    console.log("Server is running")
})
