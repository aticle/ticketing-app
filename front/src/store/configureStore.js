// @flow
import { createStore } from 'redux';
import reducers from '../reducers';
import TicketState from '../components/Ticket/Ticket';
import type { TicketAction } from '../reducers';

export type State = {
    tickets: (state?: Array<TicketState>, action: TicketAction) => Array<TicketState>
}
export const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState?: State) {
    return createStore(
        reducers,
        initialState,
        devtoolsExtension
    );
}