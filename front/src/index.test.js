import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { shallow } from 'enzyme';

describe('index', () => {
    it('application renders correctly', () => {
        const app = shallow(<Provider store={store}><App /></Provider>);
        expect(app).toMatchSnapshot();
    });
});
