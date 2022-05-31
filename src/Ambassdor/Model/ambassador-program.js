const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Ambassador_Program = sequelize.define("AFLEET_AMBASSADOR_PROGRAM",{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: {
            args: true,
            msg: 'Ambassador_Program id is already taken'
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ambassador_program_img: {
        type: Sequelize.STRING
    },
    crypto_wallet: {
        type: Sequelize.STRING
    },
    paypal_email: {
        type: Sequelize.STRING
    },
    instagram_link: {
        type: Sequelize.STRING
    },
    linkedin_link: {
        type: Sequelize.STRING
    },
    twitter_link: {
        type: Sequelize.STRING
    },
    website_link: {
        type: Sequelize.STRING
    },
    total_points: {
        type: Sequelize.STRING
    },
    mailing_address: {
        type: Sequelize.STRING
    },
    mailing_city: {
        type: Sequelize.STRING
    },
    mailing_state: {
        type: Sequelize.STRING
    },
    mailing_country: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.BOOLEAN
    }
    
},{
    freezeTableName: true
});

module.exports = Ambassador_Program