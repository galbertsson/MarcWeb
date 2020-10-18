import React, { Component } from 'react'
import Logout from './logout';
import { logout } from '../../services/auth/Auth';

export default class LogoutContainer extends Component {

    callback() {
        logout();
    }

    render() {
        return <Logout callback={() => this.callback()} />
    }
}
