// @flow
import actionTypes from '../actions/actionTypes';
import { type TicketState } from '../components/Ticket/Ticket';
import type { TicketAction } from '../actions/ticketAction';


export default (state: Array<TicketState> = [], action: TicketAction) => {
    const handler = {
        [actionTypes.CREATE_NEW_TICKET]:
            () => [
                ...state,
                Object.assign({}, action.payload && action.payload.request ? action.payload.request.data : {})
            ],
        [actionTypes.GET_ALL_TICKETS_SUCCESS]:
            () => state.concat(action.payload ? action.payload.data : []),
        [actionTypes.DELETE_TICKET_SUCCESS]:
            () => {
                const urlDel = 'delete/';
                const url = action.payload.config ? action.payload.config.url : 'NaN';
                const idPos = url.indexOf(urlDel) + urlDel.length;
                const id = Number(url.substr(idPos));
                return state.filter(ticket => ticket.id !== id);
            },
        [actionTypes.EDIT_TICKET_SUCCESS]: () => {
            console.log(action);
            const data = action.payload.config ? action.payload.config.data : '{}';
            const updatedTicket = JSON.parse(data);
            return state.map(ticket => {
                if (ticket._id === updatedTicket._id) {
                    return Object.assign({}, ticket, updatedTicket)
                } else return ticket;
            })
        }

    };

    return (handler[action.type] && handler[action.type]()) || state;
}
