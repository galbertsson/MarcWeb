import { withRouter } from 'next/router'
import dynamic from 'next/dynamic';
import firebase from 'firebase';
import Signup from '../components/auth/signup';
import FirebaseContext from '../components/firebase/FirebaseContext'
import SignInContainer from '../components/auth/signInContainer'

//This is needed to disable SSR on StyledFirebaseAuth which does not support it
//const StyledFirebaseAuthNoSSR = dynamic(() => import("react-firebaseui/StyledFirebaseAuth"), { ssr: false });
//const FirebaseContextNoSSR = dynamic(() => import ("../components/firebase/FirebaseContext"), { ssr: false });

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

    <Signup/>
    <SignInContainer firebase={this.props.firebase} />
    <button onClick={() => {
      if(process.browser){
        this.props.firebase.auth().signOut()
      }
    }}></button>

    {/* <FirebaseContext.Consumer>
      {fireApp => 
        fireApp ?
          fireApp.auth().currentUser ? 
          console.log("Logged in!") : 
          <StyledFirebaseAuthNoSSR uiConfig={this.uiConfig} firebaseAuth={fireApp.auth()}/>
        :
          "What is this?"
      }
    </FirebaseContext.Consumer>

    <FirebaseContext.Consumer>
      {fireApp =>
        fireApp && fireApp.auth() ? 
          console.log(fireApp.auth().currentUser)
        : console.log("No Auth available!")
      }
    </FirebaseContext.Consumer> */}

  </div>
  }
}
export default withRouter(Index);