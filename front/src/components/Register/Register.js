// @flow
import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect, type Dispatch } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { registerUser } from '../../actions/authAction';
import { type User } from '../../actions/authAction';
import './Register.css';

type Props = {
    registerUser: Dispatch,
    errors: Array<Error>,
    history: RouterHistory
};
type State = {
    name: string,
    email: string,
    password: string,
    password_confirm: string,
    errors: Object
};

class Register extends Component<Props, State> {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: '',
        errors: {}
    };

    handleChange = (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    handleSubmit = (e: Event) => {
        e.preventDefault();
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        this.props.registerUser(user, this.props.history);
    }

    render() {
        const { name, email, password, password_confirm } = this.state;

        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <h2>Register</h2>
                <TextField
                    label="full name"
                    id="name"
                    type="name"
                    value={name}
                    required
                    onChange={this.handleChange('name')}
                ></TextField>
                <TextField
                    label="email"
                    id="email"
                    type="email"
                    value={email}
                    required
                    onChange={this.handleChange('email')}
                ></TextField>
                <TextField
                    label="password"
                    id="password"
                    type="password"
                    value={password}
                    required
                    onChange={this.handleChange('password')}
                ></TextField>
                <TextField
                    label="password confirm"
                    id="password_confirm"
                    type="password"
                    value={password_confirm}
                    required
                    onChange={this.handleChange('password_confirm')}
                ></TextField>
                <Button
                    id="submit"
                    variant='contained'
                    type="submit"
                >REGISTER</Button>
            </form>
        );
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        registerUser: (user: User, history: RouterHistory) => registerUser(user, history)(dispatch)
    }
};

const mapStateToProps = (state: State) => {
    return {
        errors: state.errors
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Register));