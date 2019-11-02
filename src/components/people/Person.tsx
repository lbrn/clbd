import React from 'react';
import { makeStyles, Typography, Link, Grid, Avatar } from '@material-ui/core';

import { theme } from '../../theme/theme';

interface personProps {
	name: string;
	link: string | null;
	institution?: string;
	title?: string;
	role?: string;
	img?: string;
}


const Person = ({ name, link, title, role, img, institution }: personProps) => {

	const useStyles = makeStyles({
		person: {
			marginTop: theme.spacing(3),
		},
		personImgCont: {
			display: 'flex',
			height: 'auto',
		},
		personImg: {
			height: 0,
			paddingBottom: '45%',
			paddingTop: '45%',
			width: '90%',
			// centers img on top center
			backgroundPositionX: 'center',
			backgroundPositionY: 'top',
			backgroundSize: 'contain',
			borderRadius: '50%',
			backgroundImage: `url(${img})`
		},
		avatar: {
			width: '90%',
			paddingBottom: '45%',
			paddingTop: '45%',
			backgroundColor: theme.palette.primary.main,
		},

		link: {
			justifySelf: 'center',
			color: theme.palette.primary.main,
			textDecoration: 'none',
		}
	})

	const classes = useStyles();

	return (
		<Grid spacing={3} container justify="center" item xs={12} sm={6} className={classes.person}>
			<Grid item xs={4} className={classes.personImgCont}>
				{img && <div className={classes.personImg}></div>}
				{!img && <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>}
			</Grid>
			<Grid item xs={8}>
				{name && <Typography>{name}</Typography>}
				{role && <Typography>{role}</Typography>}
				{title && <Typography >{title}</Typography>}
				{/* target ensures a new tab.  nooopener is for security */}
				{link && institution && <a target="_blank" rel="noopener" href={link} className={classes.link}>{institution}</a>}
			</Grid>
		</Grid>
	)
}

export default Person
