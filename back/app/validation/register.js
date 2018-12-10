const isEmpty = require('./is-empty');
const validateEmail = require('./user/email');
const validateName = require('./user/name');
const validatePassword = require('./user/password');
const validatePasswordConfirm = require('./user/passwordConfirm');

const validateRegisterInput = ({ name, email, password, password_confirm }) => {
    const errors = {
        ...validateEmail(email).errors,
        ...validateName(name).errors,
        ...validatePassword(password).errors,
        ...validatePasswordConfirm(password, password_confirm).errors
    };

    return {
        errors,
        isValid: isEmpty(errors)
    }
};

module.exports = validateRegisterInput;
