import React from 'react';
import { shallow } from 'enzyme';
import CreateTicket from './Ticket';


describe('<CreateTicket />', () => {
    it('renders correctly', () => {
        const createTicket = shallow(<CreateTicket />);
        expect(createTicket).toMatchSnapshot();
    });
});