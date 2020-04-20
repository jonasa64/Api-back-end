const order = require('../models/Order');
const orderDetails = require('../models/OrderDeatils');

exports.create = (req, res) => {

    order.create({
        total_price : req.body.totalPrice,
        customerId : req.body.customerId
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
