import isEmpty from '../validation/is-empty';
import actionTypes from '../actions/actionTypes';
import { type User } from '../actions/authAction';

type Action = {
    type: string,
    payload: UserLogin
};

export type AuthState = {
    isAuthenticated: boolean,
    user: User
}

export const initialState: AuthState = {
    isAuthenticated: undefined,
    user: undefined
}

export default (state: AuthState = initialState, action: Action) => {
    const handler = {
        [actionTypes.SET_CURRENT_USER]: () => ({
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        })
    };

    return handler[action.type] ? handler[action.type]() : state;
};
