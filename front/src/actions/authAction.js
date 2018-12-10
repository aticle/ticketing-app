import axios from 'axios';
import { type Dispatch } from 'react-redux';
import { RouterHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import actionTypes from './actionTypes';
import setAuthToken from '../setAuthToken';
import { getJwt, setJwt, removeJwt } from '../helpers/jwt';

export type UserLogin = {
    email: string,
    password: string
};
export type User = {
    name: string,
    email: string,
    password: string,
    password_confirm?: string,
    token?: string
};

export const registerUser = (user: User, history: RouterHistory) => async (dispatch: Dispatch) => {
    try {
        await axios.post('/users/register', user);
        dispatch({ type: actionTypes.REGISTER_USER_SUCCESS });
        loginUser(user, history)(dispatch);
    } catch (err) {
        dispatch({ type: actionTypes.REGISTER_USER_FAIL });
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err
        });
    }
}

const loginRequest = async (user: UserLogin) => {
    const resp = await axios.post('/users/login', user);
    return resp.data;
}

export const loginUser = (user: UserLogin, history: RouterHistory) => async (dispatch: Dispatch) => {
    try {
        const { token } = await loginRequest(user);
        const decoded: User = jwtDecode(token);
        setJwt(token);
        setAuthToken(token);
        dispatch(setCurrentUser(decoded));
        history.push('/');
    } catch (err) {
        dispatch({
            type: actionTypes.GET_ERRORS,
            payload: err
        });
    }
}

export const logoutUser = (history: RouterHistory) => (dispatch: Diaspatch) => {
    removeJwt();
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}

const getUserRequest = async () => {
    const resp = await axios.get('/users/me', { headers: { Authorization: getJwt() } });
    return resp.data;
}

export const getUser = (history: RouterHistory) => async (dispatch: Diaspatch) => {
    try {
        const user = await getUserRequest();
        dispatch(setCurrentUser(user));
        return user;
    } catch (err) {
        removeJwt();
        history.push('/login');
    }
}

export const setCurrentUser = (decoded: User) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}
