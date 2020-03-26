import React, { Fragment, useEffect, useRef } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import './index.css';
import { theme } from './theme/theme';
import Header from './components/header/Header';
import RouterWrapper from './components/router/RouterWrapper';
import Footer from './components/Footer';

import HistoryContext from './components/contexts/HistoryContext';

require('dotenv').config();

const useStyles = makeStyles({
  appWrapper: {
    position: 'relative',
    minHeight: '100vh',
  },
  contentWrap: {
    height: '100vh',
    paddingBottom: '4.5rem',
  },
});

const App: React.FC = () => {
  const classes = useStyles();

  // useRef is used to keep the value from erasing on render
  const history = useRef(createBrowserHistory());

  useEffect(() => {
    ReactGA.initialize('UA-158668692-1', {
      debug: false,
      titleCase: false,
    });
    ReactGA.pageview('/');

    // in use effect hook so it only fires once
    history.current.listen((location, action) => {
      ReactGA.pageview(location.pathname);
    });
  }, []);

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <HistoryContext.Provider value={history.current}>
          <div className={classes.appWrapper}>
            <div className={classes.contentWrap}>
              <CssBaseline />
              <Header />
              <RouterWrapper />
              <Footer />
            </div>
          </div>
        </HistoryContext.Provider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
