const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Ambassador_Program_Custom_Campaign = sequelize.define("AFLEET_AMBASSADOR_PROGRAM_CUSTOM_CAMPAIGN",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Ambassador_Program_Custom_Campaign id is already taken'
        }
    },
    completion_status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    
},{
    timestamps:true,
    freezeTableName: true
});

module.exports = Ambassador_Program_Custom_Campaign