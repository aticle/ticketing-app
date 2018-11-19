const Ticket = require('../models/ticket.model');

// Delete ticket
module.exports = (req, res) => {
    Ticket.deleteOne(req.params, (err, { n, ok }) => {
        if (err) {
            res.json("Something went wrong. Ticket couldn't be deleted");
            return;
        }
        res.json("Ticket deleted!");
    });

};
