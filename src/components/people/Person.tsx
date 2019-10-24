import React from 'react';
import { makeStyles, Typography, Link, Grid } from '@material-ui/core';

import { theme } from '../../theme/theme';

interface personProps {
	name: string;
	link: string | null;
	title?: string;
	role?: string;
	img?: string;
}


const Person = ({ name, link, title, role, img }: personProps) => {

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

		link: {
			justifySelf: 'center'
		}
	})

	const classes = useStyles();

	return (
		<Grid spacing={3} container justify="center" item xs={12} sm={6} className={classes.person}>
			<Grid item xs={4} className={classes.personImgCont}>
				<div className={classes.personImg}></div>
			</Grid>
			<Grid item xs={8}>
				{name && <Typography>{name}</Typography>}
				{role && <Typography>{role}</Typography>}
				{title && <Typography >{title}</Typography>}
				{link && <Link className="link" color="primary">{link}</Link>}
			</Grid>
		</Grid>
	)
}

export default Person
