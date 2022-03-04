const { minLength, isRequired } = require('./errorMessages');

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

module.exports = {
    nameVal,
};