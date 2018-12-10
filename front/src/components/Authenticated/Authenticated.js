// @flow
import * as React from 'react';
import { connect, type Dispatch } from 'react-redux';
import { withRouter, RouterHistory } from 'react-router-dom';
import { type User, getUser } from '../../actions/authAction';
import type { AuthState } from '../../reducers/authReducer';

type Props = {
    history: RouterHistory,
    getUser: User,
    children: React.Node,
    auth: AuthState
};
type State = {
    auth: AuthState
};

class Authenticated extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.props.getUser(this.props.history);

        this.state = {
            auth: {
                isAuthenticated: undefined,
                user: undefined
            }
        };

    }

    componentWillReceiveProps(nextProps: Props) {
        this.setState({
            auth: nextProps.auth
        });
    }

    render() {
        const { isAuthenticated } = this.state.auth;

        if (isAuthenticated === undefined) {
            return (
                <div>Loading...</div>
            );
        }

        if (isAuthenticated === false) this.props.history.push('/login');

        return this.props.children;
    }
}

export const mapStateToProps = (state: State) => ({
    auth: state.auth
});

export const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUser: (history: RouterHistory) => getUser(history)(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Authenticated));
