// @flow
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import './MenuAppBar.css';

type MenuAppBarState = {
    anchorEl: EventTarget | null
};
type Props = {};

class MenuAppBar extends Component<Props, MenuAppBarState> {
    state = {
        anchorEl: null,
    };

    handleClick = (event: Event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = (event: Event) => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

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
                            <MenuItem
                                onClick={this.handleClose}
                            >Create Ticket</MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
export default MenuAppBar;
