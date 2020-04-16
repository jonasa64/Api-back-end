const Sequelize = require('sequelize');

const sequelize = require('../../util/database');

const shirt = sequelize.define('shirt', {

    Name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Color: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Price : {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    Description : {
        type: Sequelize.TEXT,
        allowNull: false
    },
    ImageUrl: {
        type: Sequelize.STRING,
        allowNull : false
    }
});

module.exports = shirt;
