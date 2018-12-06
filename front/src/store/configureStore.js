// @flow
import { createStore, applyMiddleware, compose, type Store } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import axios from 'axios';

import { type AuthState } from '../reducers/authReducer';
import reducers from '../reducers';
import TicketState from '../components/Ticket/Ticket';

export type Error = {
    email?: string,
    password?: string,
    password_confirm?: string,
    name?: string
};

export type State = {
    tickets: Array<TicketState>,
    errors: Error,
    auth: AuthState
};

export const devtoolsExtension = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

export default (initialState: State): Store => {
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