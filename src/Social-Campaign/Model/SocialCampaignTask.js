const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Social_Campaign_Task = sequelize.define("AFLEET_SOCIAL_CAMPAIGN_TASK",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Social_Campaign_Task id is already taken'
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    link: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps:true,
    freezeTableName: true
});

module.exports = Social_Campaign_Task