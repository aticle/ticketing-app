import tickets from './ticketReducer';
import actionTypes from '../actions/actionTypes';

describe('Tickets reducer', () => {
    const ticket1 = {
        _id: 'astigmatism',
        status: 'OPEN',
        title: 'Title',
        description: 'Description'
    };
    const ticket2 = {
        _id: 'vzxvfzdfvdzfvdz',
        status: 'OPEN',
        title: 'Another title',
        description: 'Another description'
    };

    it('handels correctly CREATE_NEW_TICKET_SUCCESS', () => {
        //empty state, empty ticket
        expect(tickets([], {
            type: actionTypes.CREATE_NEW_TICKET_SUCCESS,
            payload: { data: undefined }
        })).toEqual([{}]);

        // empty state, complete ticket
        expect(tickets([], {
            type: actionTypes.CREATE_NEW_TICKET_SUCCESS,
            payload: { data: ticket1 }
        })).toEqual([ticket1]);

        // non-empty state, complete ticket
        expect(tickets(
            [ticket1], {
                type: actionTypes.CREATE_NEW_TICKET_SUCCESS,
                payload: { data: ticket2 }
            }
        )).toEqual([ticket1, ticket2]);
    });

    it('handles correctly DELETE_TICKET_SUCCESS', () => {
        const id = 'astigmatism';
        const state = [ticket1, ticket2];
        const url = '/delete/' + id;
        const action = {
            type: actionTypes.DELETE_TICKET_SUCCESS,
            payload: {
                config: { url }
            }
        }
        expect(tickets(state, action)).toEqual([ticket2]);
    });

    it('handles correctly GET_ALL_TICKETS_SUCCESS', () => {
        const state = [ticket1];
        const action = {
            type: actionTypes.GET_ALL_TICKETS_SUCCESS,
            payload: {
                data: [ticket2]
            }
        };

        expect(tickets(state, action)).toEqual([ticket1, ticket2]);
    });

    it('handles correctly EDIT_TICKET_SUCCESS', () => {
        let updateTicket1 = Object.assign({}, ticket1);
        updateTicket1.title = 'Updated title';
        const action = {
            type: actionTypes.EDIT_TICKET_SUCCESS,
            payload: {
                config: {
                    data: JSON.stringify(updateTicket1)
                }
            }
        };
        const state = [ticket1, ticket2];

        expect(tickets(state, action)).toEqual([updateTicket1, ticket2]);
    });
});
