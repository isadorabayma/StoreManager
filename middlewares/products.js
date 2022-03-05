const { minLength, isRequired, minNumber } = require('./errorMessages');

const nameVal = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: isRequired('name') });
    }

    if (name.length < 5) {
        return res.status(422).json({ message: minLength('name', 5) });
    }

    next();
};

const quantityVal = (req, res, next) => {
    const { quantity } = req.body;

    if (quantity === undefined) {
        return res.status(400).json({ message: isRequired('quantity') });
    }

    if (quantity <= 0 || !Number.isInteger(quantity)) {
        return res.status(422).json({ message: minNumber('quantity', 1) });
    }

    next();
};

module.exports = {
    nameVal,
    quantityVal,
};