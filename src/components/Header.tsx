import React from 'react';
import { AppBar, Grid, Toolbar, makeStyles, Link } from '@material-ui/core';
import logoFull from '../assets/misc/logo_full.png';
import { navigate } from '@reach/router';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
	maxWidth: '100%',
	maxHeight: '6vh',
    cursor: 'pointer',
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    width: `100%`,
    paddingTop: '2vh',
    paddingBottom: '2vh',
    paddingLeft: '2vh',
    paddingRight: '2vh',
  },
  linksCont: {
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  link: {
    cursor: 'pointer',
    fontSize: '165%',
  },
});

const Header = () => {
  const classes = useStyles({});
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <Grid container justify="flex-start" alignItems="center" spacing={1}>
          <Grid item xs={12} sm={4} md={6}>
            <img
              onClick={e => navigate('/')}
              className={classes.image}
              src={logoFull}
              alt="Center for lung biology and disease logo"
            />
          </Grid>
          <Grid
            className={classes.linksCont}
            container
            item
            xs={12}
            sm={8}
            md={6}
          >
            <Grid item>
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => navigate('/about')}
                color="primary"
              >
                About
              </Link>
            </Grid>

            <Grid item>
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => navigate('/people')}
                color="primary"
              >
                People
              </Link>
            </Grid>
            <Grid item>
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => navigate('/resources')}
                color="primary"
              >
                Resources
              </Link>
            </Grid>
            <Grid item>
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => navigate('/events')}
                color="primary"
              >
                Events
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
