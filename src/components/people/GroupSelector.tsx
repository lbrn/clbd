import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	selector: {
		minWidth: 200
	}
});

const GroupSelector = ({value, setValue}) => {
	const classes = useStyles();


	const handleChange = e => {
		setValue(e.target.value)
	}
	return (
		<FormControl className={classes.selector}>
			<InputLabel htmlFor="demo-controlled-open-select">group</InputLabel>
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
				<MenuItem value="leadership">leadership</MenuItem>
				<MenuItem value="externalAdvisoryCommittee">external advisory committee</MenuItem>
				<MenuItem value="internalAdvisoryCommittee">internal advisory committee</MenuItem>
				<MenuItem value="mentees">mentees</MenuItem>
				<MenuItem value="investigators">investigators</MenuItem>
			</Select>
		</FormControl>
	)
}

export default GroupSelector
