import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/shared/header';
import { AuthProvider } from '../services/auth/AuthProvider';

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
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </div>
  );
}

export default MyApp;