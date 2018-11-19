import { createStore } from 'redux';
import reducers from './index';

const state = {
    tickets: [{
        id: 0,
        status: 'OPEN',
        title: 'Title',
        description: 'Description'
    }, {
        id: 1,
        status: 'OPEN',
        title: 'Titleee',
        description: 'Descriptionee'
    }]
};

describe('combined reducers store state', () => {
    it('correct empty init combined reducers', () => {
        const store = createStore(reducers);

        expect(store.getState().tickets).toEqual([]);
    });

    it('correct store state', () => {
        const store = createStore(reducers, state);
        expect(store.getState()).toEqual(state);
    });
});