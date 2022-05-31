const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Client = sequelize.define("AFLEET_CLIENT",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Admin id is already taken'
        }
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
    },
    password: {
        type:Sequelize.STRING,
        allowNull: false
    },
    client_img: {
        type: Sequelize.STRING
    },
    role: {
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

module.exports = Client