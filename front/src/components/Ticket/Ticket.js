// @flow
import React, { Component } from 'react';
import './Ticket.css';

export const Status = {
    OPEN: 'OPEN',
    IN_PROGRESS: 'IN PROGRESS',
    AWAITING_REVIEW: 'AWAITING REVIEW',
    DONE: 'DONE'
};

export type TicketState = {
    status: string,
    title: string,
    description: string,
    id?: string
};
export type TicketProps = {
    id: string,
    status: string,
    title: string,
    description: string
};

export default class Ticket extends Component<TicketProps, TicketState> {
    state = {
        status: Status.OPEN,
        title: '',
        description: ''
    };

    render() {
        const { title, description, status } = this.state;

        return (
            <article>
                <h1>{title}</h1>
                <h3>
                    <i>Description: </i><br />
                    <p>{description}</p>
                </h3>
                <p><b>Status: </b>{status}</p>
            </article>
        );
    };
}