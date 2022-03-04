const isRequired = (field) => `${field} is required`;

const minLength = (field, length) => `${field} length must be at least ${length} characters long`;

module.exports = {
    isRequired,
    minLength,
};
