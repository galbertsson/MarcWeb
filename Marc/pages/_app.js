import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head'
import Header from '../components/shared/header';

class MyApp extends App {

  constructor(data) {
    super(data)
    this.state = { user: undefined }
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
        </Head>
        <div id="main-area">
          <Header />
          <Component {...pageProps} firebase={this.firebase} user={this.state.user} />
        </div>
      </Container>
    );
  }
}

export default MyApp;
