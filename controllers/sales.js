const salesService = require('../services/sales');

const getAll = async (_req, res, next) => {
    try {
        const sales = await salesService.getAll();

        return res.status(200).json(sales);
    } catch (e) {
        next(e);
    }
};

const getById = async (req, res, next) => {
    try {
        const { id } = req.params;
        // console.log('controller', id);
        const found = await salesService.getById(id);

        if (!found.length) {
            return res.status(404).json({ 
                message: 'sales not found', 
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
