const productsService = require('../services/product');

const getAll = async (_req, res, next) => {
    try {
        const products = await productsService.getAll();

        return res.status(200).json(products);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
};
