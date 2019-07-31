import { withRouter } from 'next/router'
import firebase from 'firebase';
import Signup from '../components/auth/signup';
import AuthenticationContainer from '../components/auth/AuthenticationContainer';

class Index extends React.Component {

  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    credentialHelper : 'none'
  }

  render(){
    
    return <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World!</p>

    <Signup firebase={this.props.firebase} />
    <AuthenticationContainer firebase={this.props.firebase} />

  </div>
  }
}
export default withRouter(Index);