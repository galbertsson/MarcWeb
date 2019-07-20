;
import firebase from 'firebase';
import config from '../util/firebaseAuth'
import { withRouter } from 'next/router'
import dynamic from 'next/dynamic';
import Signup from '../components/auth/signup';

//This is needed to disable SSR on StyledFirebaseAuth which does not support it
const StyledFirebaseAuthNoSSR = dynamic(() => import("react-firebaseui/StyledFirebaseAuth"), { ssr: false });

class Index extends React.Component {
  constructor(props){
    super(props)

    if(!firebase.apps.length){
      firebase.initializeApp(config)
    }
  }

  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/decks',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  }

  render(){
    return <div>
    <style jsx>{`
      p {
        color: red;
      }
    `}</style>
    <p>Hello World!</p>

    <Signup/>
    <StyledFirebaseAuthNoSSR uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
  </div>
  }
}
export default withRouter(Index);