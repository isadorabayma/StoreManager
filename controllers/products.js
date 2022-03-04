const productsService = require('../services/products');

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
        const found = await productsService.getById(id);

        if (!found.length) {
            return res.status(404).json({ 
                message: 'Product not found', 
            });
        }

        return res.status(200).json(found[0]);
    } catch (e) {
        next(e);
    }
};

const delById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const found = await productsService.getById(id);
        if (!found.length) {
            return res.status(404).json({ 
                message: 'Product not found', 
            });
        }
        
        await productsService.delById(id);
        return res.status(204).end();
    } catch (e) {
        next(e);
    }
};

const upDateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const found = await productsService.getById(id);
        if (!found.length) {
            return res.status(404).json({ 
                message: 'Product not found', 
            });
        }
        
        const { name, quantity } = req.body;
        await productsService.upDateById(id, name, quantity);

        const edited = await productsService.getById(id);

        return res.status(200).json(edited);
    } catch (e) {
        next(e);
    }
};

module.exports = {
    getAll,
    getById,
    delById,
    upDateById,
};
