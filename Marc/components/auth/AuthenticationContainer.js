import React, { Component } from 'react'
import SignInContainer from './signInContainer'
import LogoutContainer from './logoutContainer'


export default class AuthenticationContainer extends Component {
    
    constructor(data){
        super(data)
        this.state = {loggedIn : false}
    }
    
    render() {
        return (
            this.state.loggedIn 
            ? <LogoutContainer firebase={this.props.firebase} />
            : ""
            
        )
    }
}
