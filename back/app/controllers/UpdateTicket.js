const Ticket = require('../models/ticket');

// Update ticket
module.exports = async (req, res) => {
    try {
        const ticket = Ticket.updateOne(req.params, { $set: req.body });
        res.status(200).json('Ticket successfully updated. ');
    } catch (err) {
        console.error(err);
        res.status(500);
    }
};
