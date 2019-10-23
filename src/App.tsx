import React, { Fragment } from 'react';
import { Typography, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles'

import { theme } from './theme/theme';
import Header from './components/Header';
import Hero from './components/Hero'

const App: React.FC = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header/>
        <Hero/>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
