import React, { Fragment } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { theme } from '../../theme/theme';
import GroupSelector from './GroupSelector';
import SideMenu from './SideMenu';
import menuLink from '../../models/menuLink'
interface smartMenuProps {
  active: string;
  title: string;
  setActive: any;
  links: menuLink[];
}

const SmartMenu = ({ active, setActive, links, title }: smartMenuProps) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Fragment>
      {isMobile && (
        <GroupSelector
          title={title}
          value={active}
          setValue={setActive}
          menuItems={links}
        />
      )}
      {!isMobile && <SideMenu links={links} />}
    </Fragment>
  );
};

export default SmartMenu;
