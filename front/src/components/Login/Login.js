// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { loginUser } from '../../actions/authAction';
import './Login.css';

type Props = {
    errors: Array<Error>,
    loginUser: Dispatch,
    history: RouterHistory
};
type State = {
    email: string,
    password: string,
    errors: Object
};

class Login extends Component<Props, State> {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = function (name: string) {
        return (function (e: SyntheticEvent<HTMLInputElement>) {
            const value = e.currentTarget.value;

            this.setState({
                ...this.state,
                [name]: value
            });
        }).bind(this);
    }

    state = {
        email: '',
        password: '',
        errors: {}
    };


    handleSubmit = (e: Event) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(user, this.props.history);
    }

    render() {
        const { email, password } = this.state;

        return (
            <form className="login" onSubmit={this.handleSubmit}>
                <h2>Login</h2>
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
                <Button
                    id="submit"
                    variant='contained'
                    type="submit"
                >LOGIN</Button>
            </form>
        );
    };
}

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    loginUser: (user: any, history: RouterHistory) => loginUser(user, history)(dispatch)
})

export const mapStateToProps = (state: State) => ({
    errors: state.errors
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));