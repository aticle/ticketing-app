import tickets from './ticketReducer';
import actionTypes from '../actions/actionTypes';

describe('Tickets reducer', () => {
    it('handles correctly initial state', () => {
        expect(tickets(undefined, {})).toEqual([]);
    });

    it('handels correctly CREATE_NEW_TICKET', () => {
        //empty state, empty ticket
        expect(tickets([], {
            type: actionTypes.CREATE_NEW_TICKET,
            payload: { request: { data: undefined } }
        })).toEqual([{}]);

        // empty state, complete ticket
        expect(tickets([], {
            type: actionTypes.CREATE_NEW_TICKET,
            payload: {
                request: {
                    data: {
                        id: 0,
                        status: 'OPEN',
                        title: 'Title',
                        description: 'Description'
                    }
                }
            }
        })).toEqual([{
            id: 0,
            status: 'OPEN',
            title: 'Title',
            description: 'Description'
        }]);

        // non-empty state, complete ticket
        expect(tickets(
            [
                {
                    id: 0,
                    status: 'OPEN',
                    title: 'Title',
                    description: 'Description'
                }
            ], {
                type: actionTypes.CREATE_NEW_TICKET,
                payload: {
                    request: {
                        data: {
                            id: 1,
                            status: 'OPEN',
                            title: 'Titleee',
                            description: 'Descriptionee'
                        }
                    }
                }
            }
        )).toEqual([
            {
                id: 0,
                status: 'OPEN',
                title: 'Title',
                description: 'Description'
            }, {
                id: 1,
                status: 'OPEN',
                title: 'Titleee',
                description: 'Descriptionee'
            }
        ]);
    });

    it('handles correctly DELETE_TICKET_SUCCESS', () => {
        const state = [
            {
                id: 0,
                status: 'OPEN',
                title: 'Title',
                description: 'Description'
            }, {
                id: 1,
                status: 'OPEN',
                title: 'Titleee',
                description: 'Descriptionee'
            }
        ];
        const id = 1;
        const url = '/delete/' + id;
        const action = {
            type: actionTypes.DELETE_TICKET_SUCCESS,
            payload: {
                config: { url }
            }
        }
        expect(tickets(state, action)).toEqual(
            state.filter(t => t.id !== id)
        );
    });
});
