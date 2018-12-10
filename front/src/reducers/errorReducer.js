import actionTypes from '../actions/actionTypes';
import { type Error } from '../store/configureStore';

type ErrorAction = {
    type: string,
    payload: Error
};

const initialState = {};

export default (state: Array<Error> = initialState, action: ErrorAction) => {
    const handler = {
        [actionTypes.GET_ERRORS]: () => action.payload
    }

    return handler[action.type] ? handler[action.type]() : state;
}