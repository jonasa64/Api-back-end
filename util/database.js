const Sequelize = require('sequelize');

const sequelize = new Sequelize('database name go here', 'username go here', 'password go here');

module.exports = sequelize;