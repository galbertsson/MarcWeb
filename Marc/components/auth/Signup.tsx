import { Button, TextField } from '@material-ui/core';
import React from 'react';
import Auth from '../../services/auth/Auth';
import { strategies } from '../../services/auth/strategy/Strategy';

class Signup extends React.Component<{}, { email: string, password: string }> {

    constructor(props: {}) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    register() {
        const { email, password } = this.state;

        Auth.getInstance().register(strategies.USERNAMEPASSWORD, email, password);
    }

    //@ts-ignore
    change(e) {
        //@ts-ignore
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return <form>
            <TextField onChange={(e) => this.change(e)} name="email" type="email" />
            <TextField onChange={(e) => this.change(e)} name="password" type="password" />
            <Button onClick={() => this.register()}>
                Sign up
            </Button>
        </form>
    }
}

export default Signup;