import React from 'react';
import App, { Container} from 'next/app';
import Head from 'next/head'
import firebase from 'firebase';
import Header from '../components/shared/header';

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
      this.state = {user : undefined}
      
      if(process.browser){
        if(firebase.apps && firebase.apps.length > 0){
          this.firebase = firebase.apps[0]
          this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        }else {
          this.firebase = firebase.initializeApp(config)
          this.firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        }

        this.firebase.auth().onAuthStateChanged((user) => {
          this.setState({user : user})
        })
      }
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
              <style jsx>{`
                  #main-area : {
                    background-color : #E1E2E1  
                  }
              `}</style>
              <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
                crossOrigin="anonymous" />
              </Head>
              <div id="main-area" className="container-fluid">
                <div className="row">
                  <Header />
                </div>
                <Component {...pageProps} firebase={this.firebase} user={this.state.user}/>  
              </div>
          </Container>
    );
  }
}

export default MyApp;
