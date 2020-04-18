module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const sizeController = require('../controllers/Sizes');



    router.get('/:id', sizeController.find);

    router.post('/', sizeController.create);

    router.put('/edit/:id', sizeController.update);

    router.delete('/delete/:id', sizeController.delete);

    app.use('/sizes', router);
}
