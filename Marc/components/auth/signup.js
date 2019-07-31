import React from 'react';
import { withRouter } from 'next/router'
import firebase from 'firebase';

class Signup extends React.Component {

    constructor(props){
        super(props)
        this.state = {}

        this.register = this.register.bind(this)
        this.change = this.change.bind(this)
    }

    register(e){
        this.props.firebase.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.setState({email : "", password : ""}))
        .catch(error => {
            if(error){}
        })
        e.preventDefault()
    }

    change(e){
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return <>
                <form>
                    <input onChange={this.change} name="email" type="email" />
                    <input onChange={this.change} name="password" type="password" />
                    <button onClick={this.register}>Sign up</button>
                </form>
            </>
    }
}

export default withRouter(Signup);