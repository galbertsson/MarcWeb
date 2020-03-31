import React, { Component } from 'react'
import Logout from './logout';

export default class LogoutContainer extends Component {
    
    callback(){
        this.props.firebase.auth().signOut()
    }

    render() {
        return <Logout callback={() => this.callback}/>
    }
}
