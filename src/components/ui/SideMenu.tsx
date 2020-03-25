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
import { themeExtended, theme } from '../../theme/theme';
interface sideMenuProps {
  links: menuLink[];
  // active: string;
}

const useStyles = makeStyles({
  list: {
    width: '100%',
  },
  listItem: {
    backgroundColor: theme.palette.primary.light,

    '&:hover': {
      backgroundColor: themeExtended.palette.primary.hover,
    },
  },
  // active: { backgroundColor: darken(`rgba(19, 127, 222, .25)`, 0.1) },
});

const SideMenu = ({ links }: sideMenuProps) => {
  const classes = useStyles({});

  const createLinks = links => {
    return links.map(link => (
      <ListItem
        className={classes.listItem}
        button
        key={link.code}
        id={link.code}
        // className={active === link.code ? classes.active : ''}
      >
        <ListItemText
          key={link.code}
          onClick={e => {
            link.clickHandler();
          }}
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
