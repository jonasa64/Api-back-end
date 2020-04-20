module.exports = app => {
    const  orderController = require('../controllers/Orders');
    const  express = require('express');
    const router = express.Router();

    router.post('/', orderController.create);

    router.delete('/delete/:id', orderController.delete);


    app.use('/orders', router);
}
