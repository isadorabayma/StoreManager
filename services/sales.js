const salesModel = require('../models/sales');

const getAll = async () => salesModel.getAll();

const getById = async (id) => salesModel.getById(id);
  // console.log('service', id);

module.exports = {
    getAll,
    getById,
};
