const { isLength, equals } = require('validator');
const isEmpty = require('../is-empty');

module.exports = (password, password_confirm) => {
    const errors = {};

    if (!password_confirm) password_confirm = '';
    if (!password) password = '';

    if (!isLength(password_confirm, { min: 6, max: 30 })) {
        errors.password_confirm = 'Password must have 6 chars';
    }

    if (!equals(password, password_confirm)) {
        errors.password_confirm = 'Password and Confirm Password must match';
    }

    if (isEmpty(password_confirm)) {
        errors.password_confirm = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}
