const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Custom_Campaign_Task = sequelize.define("AFLEET_CUSTOM_CAMPAIGN_TASK",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Custom_Campaign_Task id is already taken'
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

module.exports = Custom_Campaign_Task