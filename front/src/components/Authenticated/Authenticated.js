// @flow
import React, { Component } from 'react';
import { connect, type Dispatch } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { getJwt } from '../../helpers/jwt';
import { type UserLogin, type User, getUser } from '../../actions/authAction';

type Props = {
    history: RouterHistory,
    getUser: User
};
type State = {
    user: UserLogin | null
};

class Authenticated extends Component<Props, State> {
    state = {
        user: undefined
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        const jwt = getJwt();

        if (!jwt) return this.setState({ user: null });

        this.props.getUser().then(user => this.setState({ user }));
    }

    render() {
        const { user } = this.state;

        if (user === undefined) {
            return (
                <div>Loading...</div>
            );
        }

        if (user === null) this.props.history.push('/login');

        return user;
    }
}

const mapStateToProps = () => { };
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getUser: async (jwt: string, history: RouterHistory) => await getUser(jwt, history)(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authenticated));
