import axios from 'axios';
import { type Dispatch } from 'react-redux';
import { RouterHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import actionTypes from './actionTypes';
import setAuthToken from '../setAuthToken';
import { getJwt, setJwt, removeJwt } from '../helpers/jwt'

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

export const registerUser = (user: User, history: RouterHistory) => (dispatch: Dispatch) => {
    axios.post('/users/register', user)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err
            });
        });
}

export const loginUser = (user: UserLogin, history: RouterHistory) => (dispatch: Dispatch) => {
    axios.post('/users/login', user)
        .then(res => {
            const { token } = res.data;
            setJwt(token);
            setAuthToken(token);
            const decoded: User = jwtDecode(token);
            dispatch(setCurrentUser(decoded));
            console.log("@@@", history);
            history.push('/');
        })
        .catch(err => {
            dispatch({
                type: actionTypes.GET_ERRORS,
                payload: err
            });
        });
}

export const logoutUser = (history: RouterHistory) => (dispatch: Diaspatch) => {
    removeJwt();
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    history.push('/login');
}

export const getUser = (history: RouterHistory) => (dispatch: Diaspatch) => {
    axios.get('/users/me', { headers: { Authorization: getJwt() } })
        .then(res => {
            dispatch(setCurrentUser(res.data));
            return res.data;
        })
        .catch(err => {
            removeJwt();
            history.push('/login');
        });
}

export const setCurrentUser = (decoded: User) => {
    return {
        type: actionTypes.SET_CURRENT_USER,
        payload: decoded
    }
}
