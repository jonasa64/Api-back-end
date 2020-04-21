module.exports = app => {
  const customer = require("../controllers/Customer.js");

  var router = require("express").Router();
  var cors = require('cors');

  const customer = require("../controllers/Customer");
  app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  // Create a new customer
  router.post("/", customers.create);

  // Retrieve a single customer with id
  router.get("/:id", customer.findOne);

  // Update a customer with id
  router.put("/:id", customer.update);

  // Delete a customer with id
  router.delete("/:id", customer.delete);

  app.use("/customer", router);

};