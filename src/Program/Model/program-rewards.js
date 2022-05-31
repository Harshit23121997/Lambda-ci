const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Program_Rewards = sequelize.define("AFLEET_PROGRAM_REWARDS",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Program_Rewards id is already taken'
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reward_img: {
        type: Sequelize.STRING
    },
    points: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
    
},{
    freezeTableName: true
});

module.exports = Program_Rewards