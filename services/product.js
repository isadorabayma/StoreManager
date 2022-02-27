const ProductModel = require('../models/products');

const getAll = async () => ProductModel.getAll();

module.exports = {
    getAll,
};
