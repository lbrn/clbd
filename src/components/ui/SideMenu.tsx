import React, { Fragment } from 'react';
import {
  ListItem,
  ListItemText,
  makeStyles,
  List,
  Grid,
} from '@material-ui/core';
import { darken } from '@material-ui/core/styles';
import menuLink from '../../models/menuLink';
import HistoryContext from '../contexts/HistoryContext';
interface sideMenuProps {
  links: menuLink[];
  active: string;
}

const useStyles = makeStyles({
  list: {
    width: '100%',
    backgroundColor: `rgba(19, 127, 222, .2)`,
  },
  active: { backgroundColor: darken(`rgba(19, 127, 222, .25)`, 0.1) },
});

const SideMenu = ({ links, active }: sideMenuProps) => {
  const classes = useStyles({});

  const createLinks = links => {
    return links.map(link => (
      <ListItem
        button
        key={link.code}
        id={link.code}
        className={active === link.code ? classes.active : ''}
      >
        <ListItemText
          key={link.code}
          onClick={e => link.clickHandler()}
          primary={link.displayName}
        />
      </ListItem>
    ));
  };
  return (
    <Fragment>
      <Grid item xs={12}>
        <List className={classes.list}>{createLinks(links)}</List>
      </Grid>
    </Fragment>
  );
};

export default SideMenu;
