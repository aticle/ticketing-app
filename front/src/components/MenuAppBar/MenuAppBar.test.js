import React from 'react';
import { shallow } from 'enzyme';
import MenuAppBar, { mapDispatchToProps, mapStateToProps } from './MenuAppBar';
import IconButton from '@material-ui/core/IconButton';
import actionTypes from '../../actions/actionTypes';

const props = {
  auth: { isAuthenticated: true, user: {} },
  history: { push: jest.fn },
  logoutUser: jest.fn()
};
const menuAppBar = shallow(<MenuAppBar.WrappedComponent {...props} />);
const menuAppBarI = menuAppBar.instance();

describe('<MenuAppBar />', () => {
  it('renders correctly', () => {
    const props = { auth: { isAuthenticated: false, user: {} } }
    const menuAppBar = shallow(<MenuAppBar.WrappedComponent {...props} />);

    expect(menuAppBar).toMatchSnapshot();
  });

  it('IconButton click updates state', () => {
    menuAppBar.find(IconButton).simulate('click', IconButton);
    expect(menuAppBar.state().anchorEl).not.toEqual(null);
  });

  it('mapStateToProps correctly', () => {
    expect(mapStateToProps(props)).toHaveProperty('auth', props.auth);
  });

  it('mapDispatchToProps correctly', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).logoutUser(menuAppBarI.props.history);
    expect(menuAppBarI.props.logoutUser.mock.calls).toEqual([]);
  });

  it('handleClose', () => {
    menuAppBarI.handleClose();
    expect(menuAppBar.state().anchorEl).toEqual(null);
  });
});
