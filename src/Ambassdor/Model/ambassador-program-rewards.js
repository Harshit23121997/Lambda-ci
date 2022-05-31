const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Ambassador_Program_Rewards = sequelize.define("AFLEET_AMBASSADOR_PROGRAM_REWARDS",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Ambassador_Program_Rewards id is already taken'
        }
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    
},{
    timestamps:true,
    freezeTableName: true
});

module.exports = Ambassador_Program_Rewards