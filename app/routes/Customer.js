module.exports = app => {
  var router = require("express").Router();
  const customer = require("../controllers/Customer");

  // Create a new customer
  router.post("/", customer.create);

  // Retrieve a single customer with id
  router.get("/:id", customer.findOne);

  // Update a customer with id
  router.put("/:id", customer.update);

  // Delete a customer with id
  router.delete("/:id", customer.delete);

  app.use('/customer', router);
};