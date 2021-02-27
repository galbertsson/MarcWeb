import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/shared/Header';
import { AuthProvider } from '../services/auth/AuthProvider';
import { createMuiTheme, createStyles, ThemeProvider, withStyles, WithStyles } from '@material-ui/core';
import colors from '../util/colors';
import themeJson from '../settings/theme.json';

const styles = createStyles({
  mainArea: {
    backgroundColor: colors.backgroundColor,
    minHeight: '100vh',
  },
});

const theme = createMuiTheme(themeJson);

function MyApp({ Component, pageProps, classes }: AppProps & WithStyles<typeof styles>) {
  // Remove Server-side JS
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Head>
        </Head>
        <div className={classes.mainArea}>
          <Header />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default withStyles(styles)(MyApp);
