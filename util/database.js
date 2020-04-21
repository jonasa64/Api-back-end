const Sequelize = require('sequelize');

const sequelize = new Sequelize('shirts', 'root', 'H3nnaq123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
