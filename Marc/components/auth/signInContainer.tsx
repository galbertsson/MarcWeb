import React, { Component } from 'react'
import SignIn from './signin';
// import { login } from '../../services/auth/Auth';
import { strategies } from '../../services/auth/strategy/Strategy';
import { AuthContext } from '../../services/auth/Auth';
import { Auth } from '../../services/auth/Auth';

interface SignInContainerProps {

}

interface SignInContainerState {
    open: boolean;
    email: string;
    password: string;
}

class signInContainer extends React.Component<SignInContainerProps, SignInContainerState> {

    constructor(data: SignInContainerProps) {
        super(data)

        this.state = {
            open: false,
            email: '',
            password: ''
        };
    }

    /* TODO: Fix this later */
    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.name === 'email') {
            this.setState({ [e.target.name]: e.target.value })
        } else if (e.target.name === 'password') {
            this.setState({ [e.target.name]: e.target.value })
        }
    }

    submit(e: React.FormEvent<HTMLInputElement>, auth: Auth) {
        const { email, password } = this.state;
        // sendRequest(PATHS.LOGIN, [], {username: email, password});
        auth.login(strategies.USERNAMEPASSWORD, email, password);
        // login();

        e.preventDefault()
    }

    openDialog() {
        this.setState({ open: true })
    }

    closeDialog(e: React.MouseEvent) {
        e.preventDefault()
        if (e.target === e.currentTarget) {
            this.setState({ open: false })
        }

    }

    render() {
        return <>
            <span onClick={(e) => this.openDialog()}>Sign in</span>
            <AuthContext.Consumer>
                {auth => this.state.open &&
                <SignIn
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e)}
                    submit={(e: React.FormEvent<HTMLInputElement>) => this.submit(e, auth)}
                    onClose={(e: React.MouseEvent) => this.closeDialog(e)}
                />
            }
            </AuthContext.Consumer>
            
        </>

    }
}

export default signInContainer
