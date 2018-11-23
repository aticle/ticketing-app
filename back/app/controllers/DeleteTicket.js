const Ticket = require('../models/ticket');

// Delete ticket
module.exports = (req, res) => {
    Ticket.deleteMany(req.params, (err, { n, ok }) => {
        if (err) {
            res.json("Something went wrong. Ticket couldn't be deleted");
            return;
        }
        res.json("Ticket deleted!");
    });

};
