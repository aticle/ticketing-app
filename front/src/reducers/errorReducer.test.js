import errors from './errorReducer';
import actionTypes from '../actions/actionTypes';

describe('errors reducer', () => {
    it('handles correctly GET_ERRORS', () => {
        const emptyErr = {};
        const action = {
            type: actionTypes.GET_ERRORS,
            payload: emptyErr
        };

        expect(errors(undefined, action)).toEqual(emptyErr);
    });
});
