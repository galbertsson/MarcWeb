import React, { Component } from 'react'
import Logout from './logout';

export default class LogoutContainer extends Component {
    constructor(data){
        super(data)

        this.callback = this.callback.bind(this)
    }
    
    callback(){
        this.props.firebase.auth().signOut()
    }

    render() {
        return <Logout callback={this.callback}/>
    }
}
