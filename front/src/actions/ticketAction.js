// @flow
import actionTypes from './actionTypes';
import type { TicketAction } from '../reducers/ticketReducer';
import { type TicketState } from '../components/Ticket/Ticket';

export const createTicket = (ticket: TicketState): TicketAction => {
    return {
        type: actionTypes.CREATE_NEW_TICKET,
        payload: {
            ticket
        }
    };
};

export const deleteTicket = (id: number): TicketAction => {
    return {
        type: actionTypes.DELETE_TICKET,
        payload: {
            id
        }
    };
};


export const editTicket = (id: number): TicketAction => {
    return {
        type: actionTypes.EDIT_TICKET,
        payload: {
            id
        }
    };
};