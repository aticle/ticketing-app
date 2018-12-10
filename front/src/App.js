// @flow
import React from 'react';
import { Route, Switch } from "react-router-dom";
import TicketForm from './components/TicketForm/TicketForm';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import TicketsList from './components/TicketsList/TicketsList';
import Authenticated from './components/Authenticated/Authenticated';

const App = () => (
    <div className="App">
        <MenuAppBar />
        <Switch>
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Authenticated>
                <Route path="/" exact component={TicketsList} />
                <Route path="/create" exact component={TicketForm} />
            </Authenticated>
        </Switch>
    </div>
);

export default App;
