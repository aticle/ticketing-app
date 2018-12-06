import React from 'react';
import { shallow } from 'enzyme';
import Authenticated, { mapStateToProps, mapDispatchToProps } from './Authenticated';

const props = {
    history: { push: jest.fn() },
    getUser: jest.fn(),
    auth: {
        isAuthenticated: undefined,
        user: undefined
    }
};
const auth = shallow(<Authenticated.WrappedComponent {...props} />);
const authI = auth.instance();

describe('<Authenticated />', () => {
    it('renders correctly when authentication not defined', () => {
        expect(auth).toMatchSnapshot();
    });

    it('redirects to login if not authenticated', () => {
        const props = {
            history: { push: jest.fn() },
            getUser: jest.fn(),
            auth: {
                isAuthenticated: false,
                user: {}
            }
        };
        const auth = shallow(<Authenticated.WrappedComponent {...props} />);
        const authI = auth.instance();

        expect(authI.props.history.push.mock.calls[0][0]).toBe('/login');
    });

    it('renders correctly when authenticated', () => {
        const props = {
            history: { push: jest.fn() },
            getUser: jest.fn(),
            auth: {
                isAuthenticated: true,
                user: {}
            }
        };
        const auth = shallow(<Authenticated.WrappedComponent {...props} />);

        expect(auth).toMatchSnapshot();
    });

    it('mapDispatchToProps', () => {
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).getUser(authI.props.history);

        expect(authI.props.getUser.mock.calls[0][0]).toEqual(authI.props.history);
    });

    it('mapStateToProps', () => {
        mapStateToProps({ auth: props.auth });

        expect(authI.props.auth).toEqual(props.auth);
    });
});
