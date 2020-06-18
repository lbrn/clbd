import React, { useState, useEffect, useContext } from 'react';
import { AppBar, Grid, Toolbar, makeStyles, Button } from '@material-ui/core';
import logoFull from '../../assets/misc/BLM_logo_full.png';
import { navigate } from '@reach/router';

import { theme } from '../../theme/theme';
import HistoryContext from '../contexts/HistoryContext';
import HeaderMenuItem from './HeaderMenuItem';
import { createLinks as createResourcesLinks } from '../resources/ResourcesLinks';
import { createLinks as createPeopleLinks } from '../people/PeopleLinks';

const useStyles = makeStyles({
  image: {
    objectFit: 'contain',
    maxWidth: '80%',
    maxHeight: '60%',
    cursor: 'pointer',
  },
  appBar: {
	backgroundColor: theme.palette.primary.main,
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
	color: theme.palette.common.white,
    cursor: 'pointer',
    fontSize: '165%',
    textDecoration: 'none',
  },
  // linkActive: {
  //   backgroundColor: 'red',
  // },
  btn: {
    color: theme.palette.common.white,
    fontSize: '120%',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
});

const Header = () => {
  const history: any = useContext(HistoryContext);
  const classes = useStyles({});
  // const [active, setActive] = useState('');

  const resourcesLinks = createResourcesLinks(history);
  const peopleLinks = createPeopleLinks(history);

  // useEffect(() => {
  //   const linksCont = document.getElementById('linkCont');
  //   if (linksCont) {
  //     const children = linksCont && linksCont.children;
  //     for (var i = 0; i < children.length; i++) {
  //       children[i].classList.remove('linkActive');
  //     }
  //   }
  //   const link = document.getElementById(active);
  //   link && link.classList.add('linkActive');
  // }, [active]);

  // // const handleActive = id => {
  // //   setActive(id);
  // // };

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
            <Button
              size="large"
              onClick={() => {
                // setActive('menu-button-about');
                history.push('/about');
                navigate('/about');
              }}
              id="menu-button-about"
			  className={classes.btn}
            >
              about
            </Button>
            <HeaderMenuItem
              code="people"
              menuName="people"
              menuLinks={peopleLinks}
            />
            <HeaderMenuItem
              code="resources"
              menuName="resources"
              menuLinks={resourcesLinks}
            />
            <Button
              size="large"
              onClick={() => {
                // setActive('menu-button-events');
                history.push('/events');
                navigate('/events');
              }}
              id={`menu-button-events`}
              className={classes.btn}
            >
              events
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
