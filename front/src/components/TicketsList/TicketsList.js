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
    editTicket: Dispatch,
    deleteTicket: Dispatch
};

const userPermissions = {
    delete: true,
    edit: true
};
class TicketsList extends Component<TicketsListProps, TicketsListState> {
    del = <div></div>;

    state = {
        columnDefs: [],
        rowData: [],
        ticketAction: null
    };

    deleteTicket = () => {
        this.setState({
            ...this.state,
            ticketAction: 'delete'
        });
    };

    editTicket = () => {
        this.setState({
            ...this.state,
            ticketAction: 'edit'
        });
    }

    onActionCellClick = ({ data }: CellClickedEvent) => {
        // return console.log("@@@", data);
        const handler = {
            delete: (data) => this.props.deleteTicket(data._id),
            edit: (data) => this.props.editTicket(data._id, { ...data, status: 'UPDATED@CLICK' })
        };
        this.state.ticketAction && handler[this.state.ticketAction](data);
        this.setState({
            ...this.state,
            ticketAction: null
        });
    }

    getActionBtns = () => {
        return <div>
            {userPermissions.delete ? <Delete onClick={this.deleteTicket} /> : null}
            {userPermissions.edit ? <Edit onClick={this.editTicket} /> : null}
        </div>;
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
                                cellRendererFramework: this.getActionBtns,
                                onCellClicked: this.onActionCellClick
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
        editTicket: (id: string, data: any) => dispatch(editTicket(id, data)),
        deleteTicket: (id: string) => dispatch(deleteTicket(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
