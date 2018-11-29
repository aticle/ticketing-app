import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import TicketsList from './components/TicketsList/TicketsList';
import './index.css';
import TicketForm from './components/TicketForm/TicketForm';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Protected from './components/Protected/Protected';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <MenuAppBar />
                <Route path="/" exact component={TicketsList} />
                <Route path="/create" exact component={TicketForm} />
                <Route path="/login" exact component={Login} />
                {/* <Register>
                    <Route path="/protected" component={Protected}></Route>
                </Register> */}
                <Route path="/register" exact component={Register} />
            </div>
        </Router>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister(); 
