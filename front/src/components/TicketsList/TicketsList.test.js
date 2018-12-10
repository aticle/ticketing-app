
import React from 'react';
import { shallow } from 'enzyme';
import { AgGridReact } from 'ag-grid-react';

import TicketsList, { mapStateToProps, mapDispatchToProps, userPermissions } from './TicketsList';
import actionTypes from '../../actions/actionTypes';

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

    it('mapDispatchToProps correctly', () => {
        const id = 'adsasdfad';
        const dispatch = jest.fn();
        mapDispatchToProps(dispatch).deleteTicket(id);
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: actionTypes.DELETE_TICKET,
            payload: {
                request: {
                    method: 'delete',
                    url: `/tickets/delete/${id}`
                }
            }
        });
    });

    it('getActionBtns', () => {
        const id = 'csdasdfasd';
        const ticketsList = shallow(<TicketsList.WrappedComponent />);
        const arg = { data: { _id: id } };

        const actionBtnsCell = shallow(ticketsList.instance().getActionBtns(arg));
        expect(Boolean(actionBtnsCell.find(`#${id}delete`))).toBe(userPermissions.delete);
        expect(Boolean(actionBtnsCell.find(`#${id}edit`))).toBe(userPermissions.edit);
    });

    it('ticketAction delete', () => {
        const props = {
            deleteTicket: jest.fn()
        };
        const ticketsList = shallow(<TicketsList.WrappedComponent {...props} />);
        const id = 'csdasdfasd';
        const event = { currentTarget: { id: id + 'delete' } };
        const ticketListI = ticketsList.instance();

        ticketListI.ticketAction('delete')(event);
        expect(ticketListI.props.deleteTicket.mock.calls[0][0]).toEqual(id);
    });
});
