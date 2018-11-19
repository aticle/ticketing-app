import actionTypes from './actionTypes';
import { createTicket, deleteTicket, editTicket } from './ticketAction';
import { Status } from '../components/Ticket/Ticket';

describe('ticketActions works properly', () => {
    const ticket = {
        id: 12,
        status: Status.OPEN,
        title: 'Tit',
        description: 'desc'
    };

    it('createTicket returns correct value', () => {
        expect(createTicket(ticket)).toEqual({
            type: actionTypes.CREATE_NEW_TICKET,
            ticket
        });
    });

    it('deleteTicket returns correct value', () => {
        expect(deleteTicket(ticket.id)).toEqual({
            type: actionTypes.DELETE_TICKET,
            id: ticket.id
        });
    });

    it('editTicket return correct value', () => {
        expect(editTicket(ticket.id)).toEqual({
            type: actionTypes.EDIT_TICKET,
            id: ticket.id
        });
    });
});
