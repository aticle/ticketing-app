const { isEmail } = require('validator');
const isEmpty = require('../is-empty');

module.exports = (email) => {
    const errors = {};

    if (!email) email = '';

    if (isEmpty(email)) {
        errors.email = 'Email is required';
    }

    if (!isEmail(email)) {
        errors.email = 'Email is invalid';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
