module.exports = app => {
  const customer = require("../controllers/Customer.js");

  var router = require("express").Router();

  // Create a new customer
  router.post("/", customers.create);

  // Retrieve a single customer with id
  router.get("/:id", customer.findOne);

  // Update a customer with id
  router.put("/:id", customer.update);

  // Delete a customer with id
  router.delete("/:id", customer.delete);

  app.use('/customer', router);
};