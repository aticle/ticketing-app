// @flow
import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import './Register.css';

type Props = {};
type State = {
    name: string,
    email: string,
    password: string,
    password_confirm: string
};

class Register extends Component<Props, State> {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirm: ''
    };

    handleChange = (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    render() {
        const { name, email, password, password_confirm } = this.state;

        return (
            <form className="login">
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
}
export default Register;