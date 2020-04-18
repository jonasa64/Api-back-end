module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    C_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Phone: {
      type: Sequelize.INTEGER
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  return Customer;
};