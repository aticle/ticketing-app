// @flow
import actionTypes from '../actions/actionTypes';
import { type TicketState } from '../components/Ticket/Ticket';

export type TicketAction = {
    type: string,
    ticket?: TicketState,
    id?: number
};

export default (state: Array<TicketState> = [], action: TicketAction) => {
    const handler = {
        [actionTypes.CREATE_NEW_TICKET]: [
            ...state,
            Object.assign({}, action.ticket)
        ],
        [actionTypes.DELETE_TICKET]: state.filter(ticket => ticket.id !== action.id)
    };
    return handler[action.type] || state;
}
