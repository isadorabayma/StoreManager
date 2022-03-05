const { minLength, isRequired, minNumber } = require('./errorMessages');

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
    // nameVal,
    quantityVal,
};
