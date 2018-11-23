// @flow
import actionTypes from './actionTypes';
import { type TicketState } from '../components/Ticket/Ticket';

export type TicketAction = {
    type: string,
    payload: {
        ticket?: TicketState,
        id?: number,
        data?: Array<TicketState>,
        request?: {
            method: string,
            url?: string,
            data?: any
        },
        config?: {
            data: string,
            url: string
        }
    }
};

export const createTicket = (ticket: TicketState): TicketAction => {
    return {
        type: actionTypes.CREATE_NEW_TICKET,
        payload: {
            request: {
                method: 'post',
                url: '/tickets/create',
                data: ticket
            }
        }
    };
};

export const deleteTicket = (id: number): TicketAction => {
    return {
        type: actionTypes.DELETE_TICKET,
        payload: {
            request: {
                method: 'delete',
                url: `/tickets/delete/${id}`
            }
        }
    };
};


export const editTicket = (_id: string, ticket: TicketState): TicketAction => {
    return {
        type: actionTypes.EDIT_TICKET,
        payload: {
            request: {
                method: 'put',
                url: `/tickets/update/${_id}`,
                data: ticket
            }
        }
    };
};

export const getAllTickets = (): TicketAction => {
    return {
        type: actionTypes.GET_ALL_TICKETS,
        payload: {
            request: {
                method: 'get',
                url: '/tickets'
            }
        }
    };
}
