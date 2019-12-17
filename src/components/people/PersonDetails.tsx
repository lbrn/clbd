import React from 'react';
import { Typography, Avatar, Grid, makeStyles, Link } from '@material-ui/core';
import { theme } from '../../theme/theme';

interface personProps {
	path?: string;
	state?: any
}
const PersonDetails = (props) => {
	// these props are passed via react router
	console.log(props)
	const { img, mentors, role, name, title, link, institution, abstract } = props.location && props.location.state;

	console.log(props)

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
			// backgroundImage: `url(${img})`
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

	const classes = useStyles()
	console.log(props.location)
	
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
				{link && institution && <Link target="_blank" rel="noopener" href={link} className={classes.link}>{institution}</Link>}
			</Grid>
			<Grid item xs={8}>
				{mentors && <Typography>{mentors}</Typography>}
				{abstract && <Typography> {abstract}</Typography>}
			</Grid>
			MOOOOOOOOOOI
			
		</Grid>
	)
}

export default PersonDetails
