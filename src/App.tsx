import React, { Fragment } from 'react';
import { CssBaseline, makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ReactGA from 'react-ga';

import { theme } from './theme/theme';
import Header from './components/Header';
import RouterWrapper from './components/router/RouterWrapper';
import Footer from './components/Footer';
import { createHistory, LocationProvider } from '@reach/router';

// to get TS to shut up about the window object
// const windowObj: any = window;

ReactGA.initialize('UA-158668692-1');

const history = createHistory(window);

history.listen( window => {
  ReactGA.pageview(window.location.pathname+ window.location.search);
  console.log('page=>',window.location.pathname);
});

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

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <LocationProvider history={history}>
          <div className={classes.appWrapper}>
            <div className={classes.contentWrap}>
              <CssBaseline />
              <Header />
              <RouterWrapper />
            </div>
            <Footer />
          </div>
        </LocationProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
