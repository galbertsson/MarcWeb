import React, { Component } from 'react'
import Logout from './logout';
import Auth from '../../services/auth/Auth';

export default class LogoutContainer extends Component {

    callback() {
        Auth.getInstance().logout();
    }

    render() {
        return <Logout callback={() => this.callback()} />
    }
}
