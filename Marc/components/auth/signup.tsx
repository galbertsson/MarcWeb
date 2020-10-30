import React from 'react';
import { Auth } from '../../services/auth/Auth';
import { AuthContext } from '../../services/auth/Auth';
// import { register } from '../../services/auth/Auth';
import { strategies } from '../../services/auth/strategy/Strategy';

class Signup extends React.Component<{}, {email: string, password: string}> {

    constructor(props: {}){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    register(auth: Auth){
        /* this.props.firebase.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.setState({email : "", password : ""}))
        .catch(error => {
            if(error){}
        }) */
        const { email, password } = this.state;

        // sendRequest(PATHS.REGISTER, [], { username: email , password});
        // register(strategies.USERNAMEPASSWORD, email, password);
        auth.register(strategies.USERNAMEPASSWORD, email, password);
    }

    //@ts-ignore
    change(e){
        //@ts-ignore
        this.setState({[e.target.name] : e.target.value})
    }

    render(){
        return <AuthContext.Consumer>
            {auth => <form>
                    {/* @ts-ignore */}
                    <input onChange={(e) => this.change(e)} name="email" type="email" />
                    {/* @ts-ignore */}
                    <input onChange={(e) => this.change(e)} name="password" type="password" />
                    <button onClick={() => this.register(auth)}>Sign up</button>
                </form>}
                </AuthContext.Consumer>
    }
}

export default Signup;