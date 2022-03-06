const { isRequired, minNumber } = require('./errorMessages');

const productIdVal = (req, res, next) => {
    if (!req.body[0].productId) {
        return res.status(400).json({ message: isRequired('productId') });
    }

    next();
};

const quantitySaleVal = (req, res, next) => {
    if (req.body[0].quantity === undefined) {
        return res.status(400).json({ message: isRequired('quantity') });
    }

    const { quantity } = req.body[0];

    if (quantity.length <= 1 || !Number.isInteger(quantity)) {
        return res.status(422).json({ message: minNumber('quantity', 1) });
    }

    next();
};

module.exports = {
    productIdVal,
    quantitySaleVal,
};
