import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/shared/Header';
import { AuthProvider } from '../services/auth/AuthProvider';
import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import colors from '../util/colors';

const styles = createStyles({
  mainArea: {
    backgroundColor: colors.backgroundColor
  }
});

function MyApp({ Component, pageProps, classes }: AppProps & WithStyles<typeof styles>) {

  // Remove Server-side JS
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <AuthProvider>
      <Head>
      </Head>
      <div className={classes.mainArea}>
        <Header />

        <Component {...pageProps} />

      </div>
    </AuthProvider>
  );
}

export default withStyles(styles)(MyApp);