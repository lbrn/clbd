import React, { Fragment, useEffect, useState } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ReactGA from 'react-ga';

import { theme } from './theme/theme';
import Header from './components/Header';
import RouterWrapper from './components/router/RouterWrapper';
import Footer from './components/Footer';
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

let history = createHistory(window);

const App: React.FC = () => {
  const [currentURL, setCurrentURL] = useState('');

  useEffect(() => {
    history = createHistory(window);
    setCurrentURL(history.location.pathname)
    ReactGA.initialize('UA-158668692-1');
  }, []);
  useEffect(() => {
    console.log(currentURL)
  }, [history])

  const unlisten = history.listen(window => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    console.log('page=>', window.location.pathname);
  });

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
