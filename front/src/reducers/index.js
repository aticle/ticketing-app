import { combineReducers } from "redux";
import tickets from './ticketReducer';
import errors from './errorReducer';
import auth from './authReducer';

export default combineReducers({
    tickets,
    errors,
    auth
});