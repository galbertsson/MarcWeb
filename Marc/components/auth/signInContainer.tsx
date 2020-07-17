import React, { Component } from 'react'
import SignIn from './signin';
import { sendRequest } from '../communication/communication';
import { PATHS } from '../communication/routes';

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

    submit(e: React.FormEvent<HTMLInputElement>) {
        sendRequest(PATHS.LOGIN, [], {});

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
            {
                this.state.open &&
                <SignIn
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.onChange(e)}
                    submit={(e: React.FormEvent<HTMLInputElement>) => this.submit(e)}
                    onClose={(e: React.MouseEvent) => this.closeDialog(e)}
                />
            }
        </>

    }
}

export default signInContainer
