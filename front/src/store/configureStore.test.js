import configureStore from './configureStore';

describe('configureStore', () => {
    it('creates store with empty initial state', () => {
        expect(configureStore().getState().tickets).toHaveLength(0);
    });

    it('creates store with initial state', () => {
        expect(configureStore({
            tickets: [{
                id: 4,
                title: '',
                description: '',
                status: 'OPEN'
            }]
        }).getState().tickets).toHaveLength(1);
    });
});
