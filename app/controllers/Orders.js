const order = require('../models/Order');
const orderDetails = require('../models/OrderDeatils');
const Customer = require('../models/Customer');
const shirt = require('../models/Tshirt');
exports.create = (req, res) => {

    order.create({
        total_price : req.body.totalPrice,
        customerCId : req.body.customerId
    }).then(order => {
      return  orderDetails.create({
            quantity: req.body.quantity,
            orderId : order.id,
            shirtId : req.body.shirtId
        })
    }).then(result => res.send(result)).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occuredd while creating the order"
        });
    });
}


exports.delete = (req, res) => {
    const id = req.params.id;

    order.destroy({where: {id: id}}).then(num => {
        if (num == 1) {
            res.send({
                message: "order was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete order with id=${id}. Maybe shirt was not found!`
            })
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not order shirt with id=" + id
            })
        })
}


exports.update = (req, res) => {
    const id = req.body.id;
    order.update(req.body, {
        where : {id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Order was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update order with id=${id}. Maybe customer was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating order with id=" + id
        });
    })
}

exports.findAll = (req, res) => {
    order.findAll({include: [orderDetails, Customer]}).then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })
}

exports.findOne = (req, res) => {

    const id = req.params.id;
    order.findByPk(id,{ include: [orderDetails, Customer]}).then(order => {
        res.send(order);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })

}

exports.findByUserId = (req, res) => {
    const customerId = req.params.customerId;
    order.findAll( {where : {customerCId: customerId}, include: [orderDetails, Customer]}).then(orders => {
        res.send(orders);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving shirts"
        });
    })
}
