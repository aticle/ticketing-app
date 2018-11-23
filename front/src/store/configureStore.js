// @flow
import { createStore, applyMiddleware, compose, type Store } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import reducers from '../reducers';
import TicketState from '../components/Ticket/Ticket';

export type State = {
    tickets: Array<TicketState>
}
export const devtoolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default function configureStore(initialState?: State): Store {
    const client = axios.create({
        baseURL: "http://localhost:3001/",
        responseType: 'json'
    });
    const composedEnhancers = compose(
        applyMiddleware(axiosMiddleware(client)),
        devtoolsExtension
    );

    return createStore(
        reducers,
        initialState,
        composedEnhancers
    );
}