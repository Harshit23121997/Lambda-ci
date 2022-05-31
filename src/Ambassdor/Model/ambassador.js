const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Ambassador = sequelize.define("AFLEET_AMBASSADOR",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Ambassador id is already taken'
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
    ambassador_img: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.INTEGER,
    },
    other_details: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
},{
    timestamps:true,
    freezeTableName: true
});

module.exports = Ambassador