import configureStore from './configureStore';
import { getAllTickets } from '../actions/ticketAction';


const store = configureStore();
store.dispatch(getAllTickets());

export default store;
