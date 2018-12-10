// @flow
import React, { Component } from 'react';
import { Link, withRouter, RouterHistory } from "react-router-dom";
import { connect, type Dispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './MenuAppBar.css';
import { logoutUser } from '../../actions/authAction';
import type { State } from '../../reducers';
import type { AuthState } from '../../reducers/authReducer';

type MenuState = {
    anchorEl: EventTarget | null
};
type Props = {
    auth: AuthState,
    history: RouterHistory,
    logoutUser: Dispatch
};

class MenuAppBar extends Component<Props, MenuState> {
    state = {
        anchorEl: null,
    };

    handleClick = (event: Event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event: Event) => {
        this.setState({ anchorEl: null });
    };

    logout = (event: Event) => {
        this.handleClose(event);
        this.props.logoutUser(this.props.history);
    }

    render() {
        const { anchorEl } = this.state;
        const { isAuthenticated } = this.props.auth;

        const guestLinks = (
            <div>
                <Link to="/register">
                    <MenuItem
                        onClick={this.handleClose}
                    >Register</MenuItem>
                </Link>
                <Link to="/login">
                    <MenuItem
                        onClick={this.handleClose}
                    >Login</MenuItem>
                </Link>
            </div>
        );

        const authLinks = (
            <div>
                <MenuItem
                    id="logout"
                    onClick={this.logout}
                >Log Out</MenuItem>

                <Link to="/">
                    <MenuItem
                        onClick={this.handleClose}
                    >Tickets List</MenuItem>
                </Link>
                <Link to="/create">
                    <MenuItem
                        onClick={this.handleClose}
                    >Create Ticket</MenuItem>
                </Link>
            </div>
        );

        return (
            <div className="root">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className="menu-btn"
                            color="inherit"
                            aria-label="Menu"
                            onClick={this.handleClick}
                        >
                            <MenuIcon />
                        </IconButton>
                        <h1>Ticketing App</h1>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            {isAuthenticated ? authLinks : guestLinks}
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export const mapStateToProps = (state: State) => ({
    auth: state.auth
})

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    logoutUser: (history: RouterHistory) => logoutUser(history)(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MenuAppBar));
