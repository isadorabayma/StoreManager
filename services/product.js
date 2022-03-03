const ProductModel = require('../models/products');

const getAll = async () => ProductModel.getAll();

const getById = async (id) => ProductModel.getById(id);
  // console.log('service', id);

const delById = async (id) => ProductModel.delById(id);

module.exports = {
    getAll,
    getById,
    delById,
};
