import React from 'react';
import { makeStyles, Typography, Link } from '@material-ui/core';

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
			display: 'flex',
			justifyContent: 'spaceBetween',
			alignContent: 'center',
			flexGrow: 1,
			flexShrink: 1
		},
		personImgCont: {
			display: 'flex',
			flexBasis: 'calc(1/3)',
			minWidth: 200,
			height: 'auto',
			justifyContent: 'center',
			alignContent: 'center',
		},
		personImg: {
			height: 0,
			paddingBottom: '25%',
			paddingTop: '25%',
			width: '50%',
			// centers img on top center
			backgroundPositionX: 'center',
			backgroundPositionY: 'top',
			backgroundSize: 'contain',
			borderRadius: '50%',
			backgroundImage: `url(${img})`
		},
		personTextCont: {
			flexBasis: 'calc(2/3)',
		}
	})

	const classes = useStyles();

	return (
		<div className={classes.person}>
			<div className={classes.personImgCont}>
				<div className={classes.personImg}></div>
				{/* <img className="personImg" src={img} /> */}
			</div>
			<div className={classes.personTextCont}>
				{name && <Typography>{name}</Typography>}
				{role && <Typography>{role}</Typography>}
				{title && <Typography>{title}</Typography>}
				{link && <Link color="primary">{link}</Link>}
			</div>
		</div>
	)
}

export default Person
