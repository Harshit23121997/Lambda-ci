const Sequelize = require("sequelize");


const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{
    dialect: "mysql",
    host: process.env.DB_URL,
    port: process.env.DB_PORT
})

module.exports =  sequelize;