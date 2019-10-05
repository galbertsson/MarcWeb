import React, { Component } from 'react'
import SignIn from './signin';

class signInContainer extends React.Component {
    
    constructor(data){
        super(data)

        this.onChange = this.onChange.bind(this)
        this.submit = this.submit.bind(this)

        this.state = {open : false}
        
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

    openDialog(e){
        e.preventDefault()
        this.setState({open : true})
    }

    closeDialog(e){
        e.preventDefault()
        if(e.target === e.currentTarget){
            this.setState({open : false})
        }
        
    }

    render() {
        return <>
            <span onClick={(e) => this.openDialog(e)}>Sign in</span>
            {this.state.open && <SignIn onChange={this.onChange} submit={this.submit} onClose={(e) => this.closeDialog(e)}/>}
        </>
        
    }
}

export default signInContainer
