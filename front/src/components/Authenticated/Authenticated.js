// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { type User, getUser } from '../../actions/authAction';
import type { AuthState } from '../../reducers/authReducer';

type Props = {
    history: RouterHistory,
    getUser: User,
    children: Array<any>,
    auth: AuthState
};
type State = {
    auth: AuthState
};

class Authenticated extends Component<Props, State> {
    state = {
        auth: {
            isAuthenticated: undefined,
            user: undefined
        }
    }

    componentDidMount() {
        this.props.getUser(this.props.history);
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        if (isAuthenticated === undefined) {
            return (
                <div>Loading...</div>
            );
        }

        if (isAuthenticated === false) this.props.history.push('/login');

        return this.props.children;
    }
}

const mapStateToProps = (state: State) => {
    return {
        auth: state.auth
    };
};
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUser: (history: RouterHistory) => getUser(history)(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authenticated));
