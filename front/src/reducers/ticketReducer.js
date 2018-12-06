// @flow
import actionTypes from '../actions/actionTypes';
import { type TicketState } from '../components/Ticket/Ticket';
import type { TicketAction } from '../actions/ticketAction';


export default (state: Array<TicketState> = [], action: TicketAction) => {
    const handler = {
        [actionTypes.CREATE_NEW_TICKET_SUCCESS]:
            () => [
                ...state,
                Object.assign({}, (action.payload && !Array.isArray(action.payload.data)) ? action.payload.data : {})
            ],
        [actionTypes.GET_ALL_TICKETS_SUCCESS]:
            () => state.concat(action.payload ? action.payload.data : []),
        [actionTypes.DELETE_TICKET_SUCCESS]:
            () => {
                const urlDel = 'delete/';
                const url = action.payload.config ? action.payload.config.url : '';
                const idPos = url.indexOf(urlDel) + urlDel.length;
                const id = url.substr(idPos);
                return state.filter(ticket => ticket._id !== id);
            },
        [actionTypes.EDIT_TICKET_SUCCESS]:
            () => {
                const data = action.payload.config ? action.payload.config.data : '{}';
                const updatedTicket = JSON.parse(data);
                return state.map(ticket => {
                    if (ticket._id === updatedTicket._id) {
                        return Object.assign({}, ticket, updatedTicket)
                    }
                    return ticket;
                })
            }

    };

    return (handler[action.type] && handler[action.type]()) || state;
}
