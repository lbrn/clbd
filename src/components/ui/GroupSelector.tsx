import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import menuLink from '../../models/menuLink';

interface groupSelectorProps {
  value: string;
  title: string;
  setValue: any;
  menuItems: menuLink[];
}

const useStyles = makeStyles({
  selector: {
    width: '100%',
    marginTop: '2vh',
  },
});

const GroupSelector = ({
  value,
  setValue,
  title,
  menuItems,
}: groupSelectorProps) => {
  const sentenceCase = word => {
    return word.charAt(0).toUpperCase() + word.substring(1);
  };

  const classes = useStyles();

  const handleChange = e => {
    const target = menuItems.find(item => item.code=== e.target.value);
    target && target.clickHandler()
      setValue(e.target.value);
  };

  const createMenuItems = (menuItems: menuLink[]) => {
    return menuItems.map(item => (
      <MenuItem key={item.code} value={item.code}>
        {item.displayName}
      </MenuItem>
    ));
  };
  return (
    <FormControl className={classes.selector}>
      <InputLabel htmlFor="demo-controlled-open-select">
        {sentenceCase(title)}
      </InputLabel>
      <Select
        value={value}
        onChange={handleChange}
        inputProps={{
          code: 'peopleGroup',
          id: 'demo-controlled-open-select',
        }}
      >
        {createMenuItems(menuItems)}
      </Select>
    </FormControl>
  );
};

export default GroupSelector;
