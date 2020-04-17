module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const shirtController = require('../controllers/Tshirts');

    router.get('/', shirtController.findAll);

    router.get('/:id', shirtController.findById);

    router.post('/', shirtController.create);

    router.put('/edit/:id', shirtController.update);

    router.delete('/delete/:id', shirtController.delete);

    app.use('/shirts', router);
}




