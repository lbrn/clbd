import React, { Fragment } from 'react';
import {
  ListItem,
  ListItemText,
  makeStyles,
  List,
  Grid,
} from '@material-ui/core';
import { darken } from '@material-ui/core/styles';

interface link {
  name: string;
  clickHandler: () => Promise<void> | void;
}

interface sideMenuProps {
  links: link[];
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

  const humanize = name => {
    return sentenceCase(name.replace(/([A-Z])/g, ' $1').trim());
  };

  const sentenceCase = word => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  };

  const createLinks = links => {
    return links.map(link => (
      <ListItem
        button
        key={link.name}
        id={link.name}
        className={active === link.name ? classes.active : ''}
      >
        <ListItemText
          key={link.name}
          onClick={e => link.clickHandler()}
          primary={humanize(link.name)}
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
