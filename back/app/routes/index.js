const TicketCtrl = require('../controllers');

module.exports = (app) => {
    // Get all tickets
    app.get('/tickets', TicketCtrl.GetTickets);

    // Get a ticket by ID
    app.get('/ticket/find/:id', TicketCtrl.GetTicket);

    // Create new ticket
    app.post('/ticket/create', TicketCtrl.PostTicket);

    // Delete a ticket by ID
    app.delete('/ticket/delete/:id', TicketCtrl.DeleteTicket);

    // Update a ticket by ID
    app.put('/ticket/update/:id', TicketCtrl.UpdateTicket);
}
