// @flow
import React, { Component } from 'react';

import './App.css';

import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import TicketsList from './components/TicketsList/TicketsList';
import CreateTicket from './containers/CreateTicket/CreateTicket';

class App extends Component<void, void> {
  render() {
    return (
      <div className="App">
        <MenuAppBar></MenuAppBar>
        <CreateTicket />
        <TicketsList />
      </div>
    );
  }
}

export default App;
