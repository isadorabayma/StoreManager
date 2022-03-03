const productsService = require('../services/product');

const getAll = async (_req, res, next) => {
    try {
        const products = await productsService.getAll();

        return res.status(200).json(products);
    } catch (e) {
        next(e);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log('controller', id);
        const found = await productsService.getById(id);

        if (!found.length) {
            return res.status(404).json({ 
                message: 'Product not found', 
            });
          }

        return res.status(200).json(found);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
    getById,
};
