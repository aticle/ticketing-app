import React from 'react';
import { shallow } from 'enzyme';
import actionTypes from '../../actions/actionTypes'
import CreateTicket, { mapStateToProps, mapDispatchToProps } from './CreateTicket';

describe('<CreateTicket />', () => {
    it('renders correctly', () => {
        const createTicket = shallow(<CreateTicket.WrappedComponent />);
        expect(createTicket).toMatchSnapshot();
    });

    it('handles correctly onChange', () => {
        const createTicket = shallow(<CreateTicket.WrappedComponent />);

        // ID
        const idValue = 5;
        const idEvent = {
            currentTarget: {
                value: idValue.toString(),
                valueAsNumber: idValue,
                type: "number"
            }
        };
        createTicket.find("#id").simulate('change', idEvent);
        expect(createTicket.state().id).toEqual(idValue);

        // title
        const titleValue = "Title text";
        const titleEvent = {
            currentTarget: {
                value: titleValue,
                valueAsNumber: Number(titleValue),
                type: "text"
            }
        };
        createTicket.find("#title").simulate('change', titleEvent);
        expect(createTicket.state().title).toEqual(titleValue);

        // description
        const descriptionValue = "Description text";
        const descriptionEvent = {
            currentTarget: {
                value: descriptionValue,
                valueAsNumber: Number(descriptionValue),
                type: "text"
            }
        };
        createTicket.find("#description").simulate('change', descriptionEvent);
        expect(createTicket.state().description).toEqual(descriptionValue);
    });

    it('correctly mapDispatchToProps', () => {
        const ticket = {
            id: 6,
            title: 'bla',
            description: 'bla bla bla',
            status: 'OPEN'
        };
        const dispatch = jest.fn();

        mapDispatchToProps(dispatch).createTicket(ticket);
        expect(dispatch.mock.calls[0][0]).toEqual({
            type: actionTypes.CREATE_NEW_TICKET,
            ticket
        });
    });


    it('correctly mapStateToProps', () => {
        const ticket = {
            id: 6,
            title: 'bla',
            description: 'bla bla bla',
            status: 'OPEN'
        };

        expect(mapStateToProps({ tickets: [ticket] })).toHaveProperty('tickets', [ticket]);
    });

    it('handles correctly onSubmit', () => {
        const event = { preventDefault: () => { } };
        const dispatch = jest.fn();
        const props = { ...mapDispatchToProps(dispatch), ...mapStateToProps({ tickets: [] }) };
        const createTicketWrap = shallow(<CreateTicket.WrappedComponent {...props} />);
        const ticket = {
            id: 6,
            title: 'bla',
            description: 'bla bla bla',
            status: 'OPEN'
        };
        expect(createTicketWrap.find('form')).toHaveLength(1);
        createTicketWrap.setState({
            id: 6,
            title: 'bla',
            description: 'bla bla bla'
        });
        createTicketWrap.find('form').simulate('submit', event);
        expect(dispatch.mock.calls[0][0].ticket).toEqual(ticket);
        expect(createTicketWrap.state()).toEqual({
            id: ticket.id + 1,
            title: '',
            description: '',
            status: 'OPEN'
        });
    });
}); 