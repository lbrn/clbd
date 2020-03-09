import React, { Fragment, useState } from 'react';
import { Menu, MenuItem, Button } from '@material-ui/core';
import menuLink from '../../models/menuLink';

interface HeaderMenuItemProps {
  menuName: string;
  menuLinks: menuLink[];
}

const HeaderMenuItem = ({ menuName, menuLinks }: HeaderMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = e => {
    setIsOpen(false);
  };
  const handleClick = e => {
    setIsOpen(!isOpen);
  };

  const createMenuItems = (menuLinks: menuLink[]) => {
    return menuLinks.map(link => (
      <MenuItem key={link.code} onClick={link.clickHandler}>
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
      <Menu
        id="simple-menu"
        anchorEl={document.getElementById(`menu-button ${menuName}`)}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        {createMenuItems(menuLinks)}
      </Menu>
    </Fragment>
  );
};
export default HeaderMenuItem;
