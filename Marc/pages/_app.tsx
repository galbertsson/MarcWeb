import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/shared/header';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <div>
      <style jsx>{`
                #main-area : {
                  background-color : #E1E2E1  
                }
            `}</style>
      <Head>
      </Head>
      <div id="main-area">
        <Header />
        <Component {...pageProps} user={''} />
      </div>
    </div>
  );
}

export default MyApp;