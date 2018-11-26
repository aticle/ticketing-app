const GetTickets = require('./GetTickets');
const PostTicket = require('./PostTicket');
const DeleteTicket = require('./DeleteTicket');
const GetTicket = require('./GetTicket');
const UpdateTicket = require('./UpdateTicket');
const CreateUser = require('./CreateUser');

module.exports = {
    GetTickets: GetTickets,
    PostTicket: PostTicket,
    DeleteTicket: DeleteTicket,
    GetTicket: GetTicket,
    UpdateTicket: UpdateTicket,

    CreateUser: CreateUser
};