import React, { Fragment, useEffect, useState } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ReactGA from 'react-ga';

import { theme } from './theme/theme';
import Header from './components/Header';
import RouterWrapper from './components/router/RouterWrapper';
import Footer from './components/Footer';
import { createBrowserHistory } from 'history';
import { createHistory, LocationProvider } from '@reach/router';

require('dotenv').config();

const useStyles = makeStyles({
  appWrapper: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWrap: {
    paddingBottom: '4.5rem',
  },
});

let history = createBrowserHistory();

const App: React.FC = () => {

  useEffect(() => {
    ReactGA.initialize('UA-158668692-1');
  }, []);

  const unlisten = history.listen(window => {
    ReactGA.set({ page: history.location });
    ReactGA.pageview(history.location);
    console.log('page=>', history.location);
  });

  history.push('/');

  const classes = useStyles();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <div className={classes.appWrapper}>
          <div className={classes.contentWrap}>
            <CssBaseline />
            <Header />
            <LocationProvider history={history} />
            <RouterWrapper />
            {/* </LocationProvider> */}
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
