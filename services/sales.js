const salesModel = require('../models/sales');

const getAll = async () => salesModel.getAll();

const getById = async (id) => salesModel.getById(id);

const upDateById = async (id, productId, quantity) => {
  await salesModel.upDateById(id, productId, quantity);
  const updated = {
    saleId: id,
    itemUpdated: [
      {
        productId,
        quantity,
      },
    ],
  };
  return updated;
};

module.exports = {
    getAll,
    getById,
    upDateById,
};
