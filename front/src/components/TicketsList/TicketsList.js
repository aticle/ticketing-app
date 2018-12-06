// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { AgGridReact, CellClickedEvent } from 'ag-grid-react';
import type TicketState from '../Ticket/Ticket';
import type{ State } from '../../reducers';
import { editTicket, deleteTicket } from '../../actions/ticketAction';
import { Delete, Edit } from '@material-ui/icons';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './TicketsList.css';
import '@material-ui/core/styles';

type TicketsListState = {
    columnDefs: Array<Object>,
    rowData: Array<Object>,
    ticketAction: null | string
};

type TicketsListProps = {
    tickets: Array<TicketState>,
    deleteTicket: Dispatch
};

export const userPermissions = {
    delete: true,
    edit: true
};
class TicketsList extends Component<TicketsListProps, TicketsListState> {
    state = {
        columnDefs: [],
        rowData: [],
        ticketAction: null
    };

    ticketAction = (action: 'delete' | 'edit') => (e: SyntheticEvent<HTMLElement>) => {
        const eId = e.currentTarget.id;
        const id = eId.split(action)[0];
        const handler = {
            delete: (id: string) => this.props.deleteTicket(id),
            edit: (id: string) => {
                // Redirect to ticket form, get the selected ticket, then update it
            }
        };
        return handler[action] && handler[action](id);
    }

    getActionBtns = ({ data }) => {
        return (<div>
            {userPermissions.delete ? <Delete id={data._id + 'delete'} onClick={this.ticketAction('delete')} /> : null}
            {userPermissions.edit ? <Edit id={data._id + 'edit'} onClick={this.ticketAction('edit')} /> : null}
        </div>);
    };

    render() {
        return (
            <div
                style={{
                    height: '500px',
                    width: '500px'
                }}
                className="ag-theme-balham">
                <AgGridReact
                    suppressHorizontalScroll
                    rowData={this.props.tickets}
                    gridOptions={{
                        columnDefs: [
                            { headerName: "Status", field: "status" },
                            { headerName: "Title", field: "title" },
                            { headerName: "Description", field: "description" },
                            {
                                headerName: "Actions", field: "actions",
                                cellRendererFramework: this.getActionBtns
                            }
                        ],
                        onFirstDataRendered(params) {
                            params.api.sizeColumnsToFit();
                        }
                    }}>
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
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        deleteTicket: (id: string) => dispatch(deleteTicket(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
