const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        default: ''
    },
    password: {
        type: String,
        required: true,
        default: ''
    },
    token: {
        data: {
            type: JSON
        },
        date: {
            type: Date,
            default: Date.now
        }
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;