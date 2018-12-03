const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TicketSchema = Schema({
    status: {
        type: String,
        default: 'OPEN'
    },
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    }
});

const TicketModel = mongoose.model('Ticket', TicketSchema);

module.exports = TicketModel;
