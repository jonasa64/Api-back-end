const Sequelize = require('sequelize');
const serialize = require('../../util/database');


const size = serialize.define('size', {
    size: {
        type: Sequelize.STRING,
        allowNull: false,
        require: true
    },
    shirtId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        require: true
    }
});

module.exports = size;
