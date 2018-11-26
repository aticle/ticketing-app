import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from './store';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import { shallow } from 'enzyme';
import TicketForm from './components/TicketForm/TicketForm';
import TicketsList from './components/TicketsList/TicketsList';

describe('index', () => {
    it('application renders correctly', () => {
        const app = shallow(<Provider store={store}>
            <Router>
                <div>
                    <MenuAppBar />
                    <Route path="/" exact component={TicketsList} />
                    <Route path="/create" exact component={TicketForm} />
                </div>
            </Router>
        </Provider>);
        expect(app).toMatchSnapshot();
    });
});
