const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Admin = sequelize.define("AFLEET_ADMIN",{
    id: {
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
    admin_img: {
        type: Sequelize.STRING
    },
    superadmin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    country: {
        type: Sequelize.STRING
    },
    contact: {
        type: Sequelize.STRING
    }
}, {
    timestamps:true,
    freezeTableName: true

})

module.exports =  Admin