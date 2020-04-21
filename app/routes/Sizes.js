module.exports = app => {
    const express = require('express');
    const router = express.Router();

    var cors = require('cors');

    const sizeController = require('../controllers/Sizes');
    app.all('/', function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      next();
    });
    
    router.get('/:id', sizeController.find);

    router.post('/', sizeController.create);

    router.put('/edit/:id', sizeController.update);

    router.delete('/delete/:id', sizeController.delete);

    app.use('/sizes', router);
}
