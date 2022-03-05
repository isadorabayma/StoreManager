const isRequired = (field) => `${field} is required`;

const minLength = (field, length) => `${field} length must be at least ${length} characters long`;

const minNumber = (field, length) => `${field} must be greater than or equal to ${length}`;

module.exports = {
    isRequired,
    minLength,
    minNumber,
};
