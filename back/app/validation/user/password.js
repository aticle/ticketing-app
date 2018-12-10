const { isLength } = require('validator');
const isEmpty = require('../is-empty');

module.exports = (password) => {
    const errors = {};

    if (!password) password = '';

    if (isEmpty(password)) {
        errors.password = 'Password is required';
    }

    if (!isLength(password, { min: 6, max: 30 })) {
        errors.password = 'Password must have 6 chars';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
