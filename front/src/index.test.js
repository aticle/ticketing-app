import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from './store';
import { shallow } from 'enzyme';
import App from './App';

describe('index', () => {
    it('application renders correctly', () => {
        const app = shallow(<Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>);
        expect(app).toMatchSnapshot();
    });
});
