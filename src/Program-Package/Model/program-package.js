const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Program_Package = sequelize.define("AFLEET_PROGRAM_PACKAGE",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Package id is already taken'
        }
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    ambassador_count: {
        type:Sequelize.INTEGER,
        allowNull: false
    },
    package_img: {
        type: Sequelize.STRING
    },
    allowed_custom_campaign: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    allowed_social_campaign: {
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

module.exports = Program_Package