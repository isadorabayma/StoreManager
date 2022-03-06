const salesModel = require('../models/sales');

const getAll = async () => salesModel.getAll();

const getById = async (id) => salesModel.getById(id);

const upDateById = async (id, productId, quantity) => {
  salesModel.upDateById(id, productId, quantity);
};

module.exports = {
    getAll,
    getById,
    upDateById,
};
