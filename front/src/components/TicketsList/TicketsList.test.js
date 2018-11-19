
import React from 'react';
import { shallow } from 'enzyme';
import { AgGridReact } from 'ag-grid-react';

import TicketsList, { mapStateToProps } from './TicketsList';

describe('<TicketsList />', () => {
    it('renders correctly', () => {
        const ticketsList = shallow(<TicketsList.WrappedComponent />);
        expect(ticketsList).toMatchSnapshot();
    });

    it('renders an ag-grid', () => {
        const ticketsList = shallow(<TicketsList.WrappedComponent />);
        expect(ticketsList.find(AgGridReact)).toHaveLength(1);
    });

    it('mapStateToProps correctly', () => {
        expect(mapStateToProps({ tickets: [] })).toHaveProperty('tickets', []);
    });
});