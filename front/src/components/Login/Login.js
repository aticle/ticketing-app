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
    state = {
        email: '',
        password: '',
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
            email: this.state.email,
            password: this.state.password
        }
        console.log("%%%%", this.props.history);
        this.props.loginUser(user, this.props.history);
    }

    // componentWillReceiveProps(nextProps) {

    //     if(nextProps.errors) {
    //         this.setState({
    //             errors: nextProps.errors
    //         });
    //     }
    // }

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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        loginUser: (user: any, history: RouterHistory) => loginUser(user, history)(dispatch)
    }
};

const mapStateToProps = (state: State) => {
    return {
        errors: state.errors
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));