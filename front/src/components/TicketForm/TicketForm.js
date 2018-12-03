// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { type TicketState, Status } from '../Ticket/Ticket';
import { createTicket } from '../../actions/ticketAction';
import type { State } from '../../reducers';

import './TicketForm.css';

type Props = {
    createTicket: Dispatch,
    tickets: Array<TicketState>,
    ticket: TicketState
}

class TicketForm extends Component<Props, TicketState> {
    state = {
        status: Status.OPEN,
        title: '',
        description: ''
    };

    handleChange = (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            [name]: e.currentTarget.value
        });
    }

    handleSubmit = (e: Event) => {
        e.preventDefault();

        const ticket: TicketState = Object.assign({}, this.state);
        this.props.createTicket(ticket);

        this.setState({
            title: '',
            description: ''
        });
    }

    render() {
        const { title, description } = this.state;

        return (
            <form
                className="create-ticket-form"
                onSubmit={this.handleSubmit}
            >
                <h2>Create Ticket</h2>
                <TextField
                    label="Title"
                    id="title"
                    value={title}
                    required
                    onChange={this.handleChange('title')}
                ></TextField>
                <TextField
                    label="Description"
                    id="description"
                    value={description}
                    required
                    onChange={this.handleChange('description')}
                ></TextField>
                <Button
                    id="submit"
                    variant='contained'
                    type="submit"
                >SUBMIT</Button>
            </form>
        );
    };
}
export const mapStateToProps = (state: State) => {
    return {
        tickets: state.tickets
    }
};
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        createTicket: (ticket: TicketState) => dispatch(createTicket(ticket))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TicketForm);
