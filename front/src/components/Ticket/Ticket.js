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
    id: number,
    status: string,
    title: string,
    description: string
};
export type TicketProps = {
    id: number,
    status: string,
    title: string,
    description: string
};

export default class Ticket extends Component<TicketProps, TicketState> {
    state = {
        id: 0,
        status: Status.OPEN,
        title: '',
        description: ''
    };

    render() {
        const { title, description, status, id } = this.state;

        return (
            <article>
                <h1>{title}</h1>
                <h3>
                    <i>Description: </i><br />
                    <p>{description}</p>
                </h3>
                <p><b>ID: </b>{id}</p>
                <p><b>Status: </b>{status}</p>
            </article>
        );
    };
}