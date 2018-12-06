import auth from './authReducer';
import actionTypes from '../actions/actionTypes';

describe('Authorization reducer', () => {
    it('handles correctly SET_CURRENT_USER', () => {
        const user = {
            name: 'name',
            email: 'email@email.com',
            password: 'pass',
            _id: '5bff67c6c614ba2ca7fb1ab8'
        };
        const action = {
            type: actionTypes.SET_CURRENT_USER,
            payload: user
        };

        expect(auth(undefined, action)).toEqual({
            isAuthenticated: true,
            user: user
        });
    });
});
