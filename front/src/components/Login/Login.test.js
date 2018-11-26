import React from 'react';
import { shallow } from 'enzyme';
import Login from "./Login";

describe('Login', () => {
    it('renders correctly', () => {
        const login = shallow(<Login />);
        expect(login).toMatchSnapshot();
    });
});