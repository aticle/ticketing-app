import React from 'react';
import { shallow } from 'enzyme';
import Register, { mapStateToProps, mapDispatchToProps } from "./Register";

describe('Register', () => {
    it('renders correctly', () => {
        const register = shallow(<Register.WrappedComponent />);
        expect(register).toMatchSnapshot();
    });

    it('mapStateToProps correctly', () => {
        expect(mapStateToProps({ errors: {} })).toHaveProperty('errors', {});
    });

    it('mapDispatchToProps correctly', () => {
        const dispatch = jest.fn();
        expect(mapDispatchToProps(dispatch)).toHaveProperty('registerUser');
    });

    it('handles input change', () => {
        const register = shallow(<Register.WrappedComponent />);

        // name
        const nameVal = 'name';
        const nameEvent = {
            currentTarget: {
                value: nameVal
            }
        };
        register.find('#name').simulate('change', nameEvent);
        expect(register.state().name).toBe(nameVal);
    });

    it('handles submit', () => {
        const props = {
            registerUser: jest.fn(),
            history: jest.fn()
        };
        const register = shallow(<Register.WrappedComponent {...props} />);
        const event = { preventDefault: jest.fn };
        const registerInstance = register.instance();
        const user = {
            name: register.state().name,
            email: register.state().email,
            password: register.state().password,
            password_confirm: register.state().password_confirm
        };

        registerInstance.handleSubmit(event);
        expect(registerInstance.props.registerUser.mock.calls[0]).toEqual([user, registerInstance.props.history]);
    });
});
