const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Social_Campaign = sequelize.define("AFLEET_SOCIAL_CAMPAIGN",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Social_Campaign id is already taken'
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end_date: {
        type:Sequelize.DATE,
        allowNull: false
    },
    campaign_img: {
        type: Sequelize.STRING
    },
    points: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps:true,
    freezeTableName: true
});

module.exports = Social_Campaign