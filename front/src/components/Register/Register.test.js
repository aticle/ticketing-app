import React from 'react';
import { shallow } from 'enzyme';
import Register from "./Register";

describe('Register', () => {
    it('renders correctly', () => {
        const register = shallow(<Register />);
        expect(register).toMatchSnapshot();
    });

});