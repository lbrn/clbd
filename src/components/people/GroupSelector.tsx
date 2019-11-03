import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	selector: {
		width: '100%',
		marginTop: '2vh'
	}
});

const GroupSelector = ({value, setValue, title, menuItems}) => {
	const classes = useStyles();

	const handleChange = e => {
		setValue(e.target.value)
	}

	const createMenuItems = (menuItems: string[]) => {
		return menuItems.map(item => (
			<MenuItem key={item} value={item}>{item}</MenuItem>
		))
	}
	return (
		<FormControl className={classes.selector}>
			<InputLabel htmlFor="demo-controlled-open-select">{title}</InputLabel>
			<Select
				// open={open}
				// onClose={handleClose}
				// onOpen={handleOpen}
				value={value}
				onChange={handleChange}
				inputProps={{
					name: 'peopleGroup',
					id: 'demo-controlled-open-select',
				}}
			>
				{createMenuItems(menuItems)}
			</Select>
		</FormControl>
	)
}

export default GroupSelector
