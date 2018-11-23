// @flow
import React from 'react';

import './App.css';

import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import TicketsList from './components/TicketsList/TicketsList';
import TicketForm from './components/TicketForm/TicketForm';

const App = () => (
  <div className="App">
    <MenuAppBar></MenuAppBar>
    <TicketForm ticket={undefined} />
    <TicketsList />
  </div>
);

export default App;
