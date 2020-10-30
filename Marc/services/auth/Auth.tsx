import React from 'react';
import request, { SuperAgentRequest } from 'superagent'
import User from '../../util/User';
import { Strategy } from './strategy/Strategy';

type NullableUser = { [P in keyof User]: User[P] | null };

interface AuthState {
    user?: NullableUser;
    currentStrategy?: Strategy;
}

interface AuthProps { }

interface AuthContext {
    user?: NullableUser;
    login: (strategy: Strategy, username: string, password: string) => void;
    logout: () => void;
    register: (strategy: Strategy, username: string, password: string) => void;
    relay: (request: SuperAgentRequest, cb: (res: request.Response) => void) => void;
}

const pristineContext: AuthContext = {
    login: () => {},
    logout: () => {},
    register: () => {},
    relay: () => {}
}

export const AuthContext = React.createContext<AuthContext>(pristineContext);

export class Auth extends React.Component<AuthProps, AuthState> {

    login(strategy: Strategy, username: string, password: string) {
        strategy.login(username, password, () => {
            console.log('did login');
            const username = strategy?.getUsername();
            const userId = strategy?.getUserId();

            this.setState({
                currentStrategy: strategy,
                user: { username, id: userId }
            });
        });

        console.log('Doing login!');
    }

    logout() {
        this.state.currentStrategy?.logout();
    }

    register(strategy: Strategy, username: string, password: string) {
        this.state.currentStrategy?.register(username, password);
        this.setState({
            currentStrategy: strategy
        });
    }

    relay(request: SuperAgentRequest, cb: (res: request.Response) => void) {
        console.log('Going to relay!');
        this.state.currentStrategy?.dress(request, (dressedRequest) => {
            console.log('Got a dressed request!');
            dressedRequest.then(res => {
                console.log('Relay res to consumer?', res)
                cb(res);
            })
                .catch(err => {
                    console.log('Relay err to consumer?', err);
                })
        });
    }

    render() {
        const { user } = this.state;

        return <AuthContext.Provider value={{ user, login: this.login, logout: this.logout, register: this.register, relay: this.relay }}>
            {this.props.children}
        </AuthContext.Provider>
    }
}

