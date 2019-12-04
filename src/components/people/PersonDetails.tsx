import React from 'react';
import { Typography, Avatar, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	person: {

	},
	link: {

	}
})

const PersonDetails = ({ img, role, name, title, link, institution, abstract }) => {

	const classes = useStyles()
	return (
		<Grid spacing={3} container justify="center" item xs={12} sm={6} className={classes.person}>
			{/* <Grid item xs={4} className={classes.personImgCont}>
				{img && <div className={classes.personImg}></div>}
				{!img && <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>}
			</Grid> */}
			<Grid item xs={8}>
				{name && <Typography>{name}</Typography>}
				{role && <Typography>{role}</Typography>}
				{title && <Typography >{title}</Typography>}
				{/* target ensures a new tab.  nooopener is for security */}
				{link && institution && <a target="_blank" rel="noopener" href={link} className={classes.link}>{institution}</a>}
			</Grid>
			<Grid item xs={8}>
				{abstract && <Typography> {abstract}</Typography>}
			</Grid>
		</Grid>
	)
}

export default PersonDetails
