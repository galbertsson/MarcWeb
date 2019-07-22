import React from 'react';
import App, { Container } from 'next/app';
import firebase from 'firebase';
import { FirebaseContext } from '../components/firebase';

const config = {
    apiKey: "AIzaSyAsCLYUhRdm_bvLOGgwdVXKGcCSlNX7zO8",
    authDomain: "marcapipoint.firebaseapp.com",
    databaseURL: "https://marcapipoint.firebaseio.com",
    projectId: "marcapipoint",
    storageBucket: "",
    messagingSenderId: "591562006117",
    appId: "1:591562006117:web:e53bb13ecf0aad59"
}

class MyApp extends App {

    constructor(data){
        super(data)
        console.log("Const!")
        console.log(firebase.apps)
        
        if(process.browser){//TODO: this code should be moved to componentDidMount
          if(firebase.apps && firebase.apps.length > 0){
            this.firebase = firebase.apps[0]
            this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          }else {
            this.firebase = firebase.initializeApp(config)
            this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          }
        }
        console.log(this.firebase)
    }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
        <Container>
            <FirebaseContext.Provider value={this.firebase}>
                <Component {...pageProps} />
            </FirebaseContext.Provider>
        </Container>
    );
  }
}

export default MyApp;
