const Sequelize = require('sequelize')
const sequelize = require('./../../../util/database')
const bcrypt = require('bcrypt')

const Program = sequelize.define("AFLEET_PROGRAM",{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    program_img: {
        type: Sequelize.STRING
    },
    community_channel: {
        type: Sequelize.STRING
    },
    community_group: {
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
    max_reward: {
        type: Sequelize.DOUBLE
    },
    expiry_date: {
        type: Sequelize.DATE,
        defaultValue: "2055-12-12"
    }
},{
    timestamps:false,
    freezeTableName: true
});

module.exports = Program