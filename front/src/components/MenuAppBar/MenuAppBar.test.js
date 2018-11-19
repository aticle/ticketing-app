import React from 'react';
import { shallow } from 'enzyme';
import MenuAppBar from './MenuAppBar';
import IconButton from '@material-ui/core/IconButton';
import { MenuItem } from '@material-ui/core';

describe('<MenuAppBar/>', () => {
  it('renders correctly', () => {
    const menuAppBar = shallow(<MenuAppBar />);
    expect(menuAppBar).toMatchSnapshot();
  });

  it('IconButton click updates state', () => {
    const menuAppBar = shallow(<MenuAppBar />);
    menuAppBar.find(IconButton).simulate('click', IconButton);
    expect(menuAppBar.state().anchorEl).not.toEqual(null);
  });

  it('MenuItem click updates state', () => {
    const menuAppBar = shallow(<MenuAppBar />);
    menuAppBar.find(IconButton).simulate('click', IconButton);
    menuAppBar.find(MenuItem).simulate('click', MenuItem);
    expect(menuAppBar.state().anchorEl).toEqual(null)
  });
});
