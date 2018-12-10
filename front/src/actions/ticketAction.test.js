import actionTypes from './actionTypes';
import { createTicket, deleteTicket, editTicket } from './ticketAction';
import { Status } from '../components/Ticket/Ticket';

describe('ticketActions', () => {
    const ticket = {
        id: 12,
        status: Status.OPEN,
        title: 'Tit',
        description: 'desc'
    };

    it('createTicket returns correct value', () => {
        expect(createTicket(ticket)).toEqual({
            type: actionTypes.CREATE_NEW_TICKET,
            payload: {
                request: {
                    data: ticket,
                    method: "post",
                    url: "/tickets/create"
                }
            }
        });
    });

    it('deleteTicket returns correct value', () => {
        expect(deleteTicket(ticket.id)).toEqual({
            type: actionTypes.DELETE_TICKET,
            payload: {
                request: {
                    method: "delete",
                    url: `/tickets/delete/${ticket.id}`
                }
            }
        });
    });

    it('editTicket return correct value', () => {
        expect(editTicket(ticket.id)).toEqual({
            type: actionTypes.EDIT_TICKET,
            payload: {
                request: {
                    data: undefined,
                    method: "put",
                    url: `/tickets/update/${ticket.id}`
                }
            }
        });
    });
});
