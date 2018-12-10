import { createStore } from 'redux';
import reducers from './index';

const initState = {
    tickets: [],
    errors: {},
    auth: {
        isAuthenticated: undefined,
        user: undefined
    }
};

describe('combined reducers store state', () => {
    it('correct store initial state', () => {
        const store = createStore(reducers);
        expect(store.getState()).toEqual(initState);
    });
});