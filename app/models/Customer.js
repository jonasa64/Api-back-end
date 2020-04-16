module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    C_id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING
    },
    Phone: {
      type: Sequelize.INTEGER
    },
    Email: {
      type: Sequelize.STRING
    },
    Address: {
      type: Sequelize.STRING
    },
    Username: {
      type: Sequelize.STRING
    },
    Password: {
      type: Sequelize.STRING
    }
  });

  return Customer;
};