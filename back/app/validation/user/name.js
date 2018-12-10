const { isLength } = require('validator');
const isEmpty = require('../is-empty');

module.exports = (name) => {
    const errors = {};

    if (!name) name = '';

    if (isEmpty(name)) {
        errors.name = 'Name field is required';
    }

    if (!isLength(name, { min: 2, max: 30 })) {
        errors.name = 'Name must be between 2 to 30 chars';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
