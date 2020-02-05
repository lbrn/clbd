import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  makeStyles,
  Typography,
  Link
} from '@material-ui/core';
import logoFull from '../assets/misc/logo_full.png';
import { navigate } from '@reach/router';

import { theme, themeExtended } from '../theme/theme';

const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
    maxWidth: '80%',
    maxHeight: '60%',
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
  linkCont: {
    '&:hover': {
      backgroundColor: themeExtended.palette.primary.hover,
    },
    padding: 5,
  },
  linkActive: {
    backgroundColor: themeExtended.palette.primary.hover,
  },
  link: {
    cursor: 'pointer',
    fontSize: '165%',
  },
});

const Header = () => {
  const classes = useStyles({});
  const [active, setActive] = useState('');

  useEffect(() => {
    const linksCont = document.getElementById('linkCont');
    if (linksCont) {
      const children = linksCont && linksCont.children;
      console.log(children);
      for (var i = 0; i < children.length; i++) {
        children[i].classList.remove('linkActive');
      }
    }
    const link = document.getElementById(active);
    link && link.classList.add('linkActive');
  }, [active]);

  const handleActive = id => {
    setActive(id);
  };

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
            id="linkCont"
            className={classes.linksCont}
            container
            item
            xs={12}
            sm={8}
            md={6}
          >
            <Grid item className={classes.linkCont} id="aboutLink">
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => {
                  navigate('/about');
                  handleActive('aboutLink');
                }}
                color="primary"
              >
                About
              </Link>
            </Grid>

            <Grid item className={classes.linkCont} id="peopleLink">
              <Link
                variant="body1"
                className={classes.link}
                onClick={e => {
                  navigate('/people');
                  handleActive('peopleLink');
                }}
                color="primary"
              >
                People
              </Link>
            </Grid>
            <Grid item className={classes.linkCont} id="resourcesLink">
              <Typography
                variant="body1"
                className={classes.link}
                onClick={e => {
                  navigate('/resources');
                  handleActive('resourcesLink');
                }}
                color="primary"
              >
                Resources
              </Typography>
            </Grid>
            <Grid item className={classes.linkCont} id="eventsLink">
              <Typography
                variant="body1"
                className={classes.link}
                onClick={e => {
                  navigate('/events');
                  handleActive('eventsLink');
                }}
                color="primary"
              >
                Events
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
