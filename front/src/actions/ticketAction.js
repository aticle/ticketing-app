// @flow
import actionTypes from './actionTypes';
import axios from 'axios';
import { type Dispatch } from 'react-redux';
import { type TicketState } from '../components/Ticket/Ticket';

export type TicketAction = {
    type: string,
    payload: {
        ticket?: TicketState,
        id?: number,
        data?: Array<TicketState> | TicketState,
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

export const deleteTicket = (_id: string): TicketAction => {
    return {
        type: actionTypes.DELETE_TICKET,
        payload: {
            request: {
                method: 'delete',
                url: `/tickets/delete/${_id}`
            }
        }
    };
};


export const editTicket = (id: string, ticket: TicketState): TicketAction => {
    return {
        type: actionTypes.EDIT_TICKET,
        payload: {
            request: {
                method: 'put',
                url: `/tickets/update/${id}`,
                data: ticket
            }
        }
    };
};

export const getTicket = (id: string) => (dispatch: Dispatch) => {
    // return {
    //     type: actionTypes.EDIT_TICKET,
    //     payload: {
    //         request: {
    //             method: 'get',
    //             url: `/tickets/find/${id}`
    //         }
    //     }
    // };
    axios.get(`/tickets/find/${id}`)
        .then(res => {
            console.log("###", res);
            return res.data;
        })
        .catch(err => {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err
            });
        });
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
