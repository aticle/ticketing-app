const Ticket = require('../models/ticket');

// Delete ticket
module.exports = (req, res) => {
    Ticket.deleteOne(req.params, (err, res) => {
        if (err) {
            res.status(400).json("Something went wrong. Ticket couldn't be deleted");
            return;
        }
        res.status(200).json("Ticket deleted!");
    });

};
