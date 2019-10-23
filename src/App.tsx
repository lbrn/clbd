import React, { Fragment } from 'react';
import { Typography, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'
import { Router } from '@reach/router'

import { theme } from './theme/theme';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/about/About';

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header />
        <Router>
          <Hero path="/" />
          <About path="/about" />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
