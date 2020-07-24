import React from 'react';
import { withRouter } from 'next/router'
import { sendRequest } from '../communication/communication';
import { PATHS } from '../communication/routes';

class Signup extends React.Component<{}, {email: string, password: string}> {

    constructor(props: {}){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    register(){
        /* this.props.firebase.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.setState({email : "", password : ""}))
        .catch(error => {
            if(error){}
        }) */
        const { email, password } = this.state;

        sendRequest(PATHS.REGISTER, [], { username: email , password});
    }

    //@ts-ignore
    change(e){
        //@ts-ignore
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return <>
                <form>
                    {/* @ts-ignore */}
                    <input onChange={(e) => this.change(e)} name="email" type="email" />
                    {/* @ts-ignore */}
                    <input onChange={(e) => this.change(e)} name="password" type="password" />
                    <button onClick={() => this.register()}>Sign up</button>
                </form>
            </>
    }
}

export default Signup;