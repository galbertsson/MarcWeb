import React, { Component } from 'react'
import SignIn from './signin';

class signInContainer extends React.Component {
    
    constructor(data){
        super(data)

        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)
        
    }
    
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }
    
    submit(e){
        this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.setState({email : "", password : ""}))
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(error.code)
            console.log(error.message)
            // ...
        });


        e.preventDefault()
    }

    render() {
        return <SignIn onChange={this.onChange} submit={this.submit}/>
    }
}

export default signInContainer
