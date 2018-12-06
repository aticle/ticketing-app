import React from 'react';
import { shallow } from 'enzyme';
import Login, { mapStateToProps, mapDispatchToProps } from "./Login";

const props = {
    loginUser: jest.fn(),
    history: jest.fn()
};
const login = shallow(<Login.WrappedComponent {...props} />);
const loginI = login.instance();

describe('Login', () => {
    it('renders correctly', () => {
        const login = shallow(<Login.WrappedComponent />);
        expect(login).toMatchSnapshot();
    });

    it('handleChange', () => {
        const value = 'viva@olla.com'
        const event = { currentTarget: { value } };
        const change = 'email';
        loginI.handleChange(change)(event);
        expect(loginI.state[change]).toBe(value);
    });

    it('handleSubmit', () => {
        const event = { preventDefault: jest.fn() };
        const user = {
            email: 'gedult@bringtrosen.ge',
            password: 'verstanden'
        };
        loginI.setState({
            ...loginI.state,
            ...user
        });
        loginI.handleSubmit(event);
        expect(loginI.props.loginUser.mock.calls[0]).toEqual([user, loginI.props.history]);
    });

    it('mapStateToProps', () => {
        const errors = {};
        expect(mapStateToProps({ errors })).toHaveProperty('errors', errors);
    });

    it('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const user = {
            email: 'gedult@bringtrosen.ge',
            password: 'verstanden'
        };
        mapDispatchToProps(dispatch).loginUser(user, loginI.props.history);
        expect(loginI.props.loginUser.mock.calls[0][0]).toEqual(user);
    });
});