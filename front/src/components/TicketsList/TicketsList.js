// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';

import type TicketState from '../Ticket/Ticket';
import type{ State } from '../../reducers';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './TicketsList.css';

type TicketsListState = {
    columnDefs: Array<Object>,
    rowData: Array<Object>
};

type TicketsListProps = {
    tickets: Array<TicketState>
};

class TicketsList extends Component<TicketsListProps, TicketsListState> {
    state = {
        columnDefs: [
            { headerName: "ID", field: "id" },
            { headerName: "Status", field: "status" },
            { headerName: "Title", field: "title" },
            { headerName: "Description", field: "description" }
        ],
        rowData: []
    };


    render() {
        return (
            <div
                style={{
                    height: '300px',
                    width: '500px'
                }}
                className="ag-theme-balham">
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.props.tickets}>
                </AgGridReact>
            </div>
        );
    }
}
export const mapStateToProps = (state: State) => {
    return {
        tickets: state.tickets
    };
};

export default connect(mapStateToProps)(TicketsList);
