const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Program_Client= sequelize.define("AFLEET_PROGRAM_CLIENT",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Program_Clientid is already taken'
        }
    },
    client_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    program_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
},{
    freezeTableName: true
});

module.exports = Program_Client