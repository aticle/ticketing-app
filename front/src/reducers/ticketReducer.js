// @flow
import actionTypes from '../actions/actionTypes';
import { type TicketState } from '../components/Ticket/Ticket';

export type TicketAction = {
    type: string,
    payload: {
        ticket?: TicketState,
        id?: number
    }
};

export default (state: Array<TicketState> = [], action: TicketAction) => {
    const handler = {
        [actionTypes.CREATE_NEW_TICKET]: [
            ...state,
            Object.assign({}, action.payload ? action.payload.ticket : {})
        ],
        [actionTypes.DELETE_TICKET]: state.filter(ticket => ticket.id !== action.payload.id)
    };
    return handler[action.type] || state;
}
