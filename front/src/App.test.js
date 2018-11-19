import React from 'react';
import App from './App';
import MenuAppBar from './components/MenuAppBar/MenuAppBar';
import { shallow } from 'enzyme';

describe('<App/>', () => {
  it('renders correctly', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });

  it('renders one <MenuAppBar/>', () => {
    const app = shallow(<App />);
    expect(app.find(MenuAppBar)).toHaveLength(1);
  });
});
