const size = require('../models/Size');

exports.create = (req, res) => {

    const newSize = {
            size: req.body.size,
            shirtId: req.body.shirtId
    }

    size.create(newSize).
    then(data => res.send(data)).
    catch(err => {
        res.status(500).send({
            message: err.message || "Some error occuredd while creating the size"
        });
    })
}


exports.update = (req, res) => {
    const id = req.params.id;

    const updatedSize = {
        size : req.body.size,
        shirtId: req.body.shirtId
    }

    size.update(updatedSize, {where: {id: id}}).then(num => {
        if (num == 1) {
            res.send({
                message: "Size was updated successfully"
            });
        } else {
            res.send({
                message: `Cannot update Size with id=${id}. Maybe Size was not found or req.body is empty!`
            })
        }
    }).catch(err => {
        res.send(500).send({
            message: "Error updating size with id=" + id
        });
    });

}


exports.find = (req, res) => {
    const id = req.params.id;
    size.findAll({where: { shirtId: id}})
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving sizes for shirts with the id= ' + id
            });
        })
}


exports.delete = (req, res) => {
    const id = req.params.id;

    size.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "size was deleted successfully!"
            })
        } else {
            res.send({
                message: `Cannot delete size with id=${id}. Maybe size was not found!`
            })
        }
    })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete size with id=" + id
            })
        })

}
