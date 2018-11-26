// @flow
import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import './Login.css';

type Props = {};
type State = {
    user: string,
    password: string
};

class Login extends Component<Props, State> {
    state = {
        user: '',
        password: ''
    };

    handleChange = (name: string) => (e: SyntheticEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    render() {
        const { user, password } = this.state;

        return (
            <form className="login">
                <h2>Login</h2>
                <TextField
                    label="user"
                    id="user"
                    type="email"
                    value={user}
                    required
                    onChange={this.handleChange('user')}
                ></TextField>
                <TextField
                    label="password"
                    id="password"
                    type="password"
                    value={password}
                    required
                    onChange={this.handleChange('password')}
                ></TextField>
                <Button
                    id="submit"
                    variant='contained'
                    type="submit"
                >LOGIN</Button>
            </form>
        );
    };
}
export default Login;