const Sequelize = require('sequelize');

const sequelize = new Sequelize('t-shirts', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
