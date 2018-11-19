// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { TextField, Button } from '@material-ui/core';

import { type TicketState, Status } from '../../components/Ticket/Ticket';
import { createTicket } from '../../actions/ticketAction';
import type { State } from '../../reducers';

import './CreateTicket.css';

type Props = {
    createTicket: Dispatch,
    tickets: Array<TicketState>
}

class CreateTicket extends Component<Props, TicketState> {
    state = {
        id: 0,
        status: Status.OPEN,
        title: '',
        description: ''
    };

    handleChange = (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
        const isNumber = e.currentTarget.type === "number";
        const value = e.currentTarget.value;
        this.setState({
            [name]: isNumber ? Number(value) : value
        });
    }

    handleSubmit = (e: Event) => {
        e.preventDefault();

        const ticket: TicketState = Object.assign({}, this.state);
        this.props.createTicket(ticket);

        this.setState({
            id: this.state.id + 1,
            title: '',
            description: ''
        });
    }

    render() {
        const { id, title, description } = this.state;

        return (
            <form
                className="create-ticket-form"
                onSubmit={this.handleSubmit}
            >
                <h2>Create Ticket</h2>
                <TextField
                    label="ID"
                    id="id"
                    type="number"
                    value={id}
                    required
                    onChange={this.handleChange('id')}
                ></TextField>
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
export default connect(mapStateToProps, mapDispatchToProps)(CreateTicket);
