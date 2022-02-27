const express = require('express');
const productsController = require('../controllers/product');

const router = express.Router();

router.get('/products', productsController.getAll);

module.exports = {
    router,
};
