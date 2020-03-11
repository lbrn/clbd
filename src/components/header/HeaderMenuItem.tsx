import React, { Fragment, useState } from 'react';
import {
  MenuList,
  Popper,
  MenuItem,
  Button,
  ClickAwayListener,
  Paper,
  makeStyles,
} from '@material-ui/core';
import menuLink from '../../models/menuLink';
import { themeExtended } from '../../theme/theme';

const useStyles = makeStyles({
  menu: {
    // magic number is to set the index one higher than the header
    zIndex: 1101,
  },
  menuItem: {
    '&:hover': {
      backgroundColor: themeExtended.palette.primary.hover,
    },
  },
});
interface HeaderMenuItemProps {
  menuName: string;
  menuLinks: menuLink[];
}

const HeaderMenuItem = ({ menuName, menuLinks }: HeaderMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleClick = e => {
    setIsOpen(!isOpen);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setIsOpen(!isOpen);
    setAnchorEl(null);
  };

  const createMenuItems = (menuLinks: menuLink[]) => {
    return menuLinks.map(link => (
      <MenuItem
        className={classes.menuItem}
        key={link.code}
        onClick={() => {
          console.log(link.clickHandler);
          link.clickHandler();
          handleClose();
        }}
      >
        {link.displayName}
      </MenuItem>
    ));
  };

  return (
    <Fragment>
      <Button
        size="large"
        color="primary"
        id={`menu-button ${menuName}`}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {menuName}
      </Button>
      {anchorEl && (
        <Popper
          className={classes.menu}
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={isOpen}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList id="menu-list-grow">
                {createMenuItems(menuLinks)}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      )}
    </Fragment>
  );
};
export default HeaderMenuItem;
