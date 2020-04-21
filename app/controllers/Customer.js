const Customer = require("../models/Customer");

// Create and Save a new customer
exports.create = (req, res) => {

  // Create a customer
  const customer = {
    Name: req.body.name,
    Phone: req.body.phone,
    Email: req.body.email,
    Address: req.body.address,
    Username: req.body.username,
    Password: req.body.password
  };

  // Save customer in the database
  Customer.create(customer)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer."
      });
    });
};

// Find a single customer with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Customer.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving customer with id=" + id
        });
      });
  
};

// Update a customer by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Customer.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update customer with id=${id}. Maybe customer was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating customer with id=" + id
        });
      });
  
};

// Delete a customer with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Customer.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete customer with id=${id}. Maybe customer was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete customer with id=" + id
        });
      });
  
};