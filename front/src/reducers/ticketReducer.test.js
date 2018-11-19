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
            ticket: undefined
        })).toEqual([{}]);

        // empty state, complete ticket
        expect(tickets([], {
            type: actionTypes.CREATE_NEW_TICKET,
            ticket: {
                id: 0,
                status: 0,
                title: 'Title',
                description: 'Description'
            }
        })).toEqual([{
            id: 0,
            status: 0,
            title: 'Title',
            description: 'Description'
        }]);

        // non-empty state, complete ticket
        expect(tickets(
            [
                {
                    id: 0,
                    status: 0,
                    title: 'Title',
                    description: 'Description'
                }
            ], {
                type: actionTypes.CREATE_NEW_TICKET,
                ticket: {
                    id: 1,
                    status: 2,
                    title: 'Titleee',
                    description: 'Descriptionee'
                }
            }
        )).toEqual([
            {
                id: 0,
                status: 0,
                title: 'Title',
                description: 'Description'
            }, {
                id: 1,
                status: 2,
                title: 'Titleee',
                description: 'Descriptionee'
            }
        ]);
    });

    it('handles correctly DELETE_TICKET', () => {
        const state = [
            {
                id: 0,
                status: 0,
                title: 'Title',
                description: 'Description'
            }, {
                id: 1,
                status: 2,
                title: 'Titleee',
                description: 'Descriptionee'
            }
        ];
        const action = {
            type: actionTypes.DELETE_TICKET,
            id: 1
        }
        expect(tickets(state, action)).toEqual(
            state.filter(t => t.id !== action.id)
        );
    });
});
