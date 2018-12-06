import configureStore from './configureStore';
import { initialState } from '../reducers/authReducer';

describe('configureStore', () => {
    it('creates store with empty initial state', () => {
        const store = configureStore().getState();
        expect(store).toHaveProperty('tickets', []);
        expect(store).toHaveProperty('errors', {});
        expect(store).toHaveProperty('auth', initialState);
    });
});
