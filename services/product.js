const ProductModel = require('../models/products');

const getAll = async () => ProductModel.getAll();

const getById = async (id) => ProductModel.getById(id);
  // console.log('service', id);

module.exports = {
    getAll,
    getById,
};
