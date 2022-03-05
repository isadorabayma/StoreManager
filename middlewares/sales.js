const { isRequired, minNumber } = require('./errorMessages');

const productIdVal = (req, res, next) => {
    const { productId } = req.body;

    if (productId === undefined) {
        return res.status(400).json({ message: isRequired('productId') });
    }

    next();
};

const quantityVal = (req, res, next) => {
    const { quantity } = req.body;

    if (quantity === undefined) {
        return res.status(400).json({ message: isRequired('quantity') });
    }

    if (quantity.length > 0 || Number.isInteger(quantity)) {
        return res.status(422).json({ message: minNumber('quantity', 1) });
    }

    next();
};

module.exports = {
    productIdVal,
    quantityVal,
};
