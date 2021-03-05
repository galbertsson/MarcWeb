import { Button } from '@material-ui/core';
import React, { Component } from 'react'
import Auth from '../../services/auth/Auth';

export default class LogoutContainer extends Component {

    logout() {
        Auth.getInstance().logout();
    }

    render() {
        return <Button variant='contained' onClick={() => this.logout()}>
            Logout
        </Button>
    }
}
