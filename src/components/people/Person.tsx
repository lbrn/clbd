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
			// display: 'inlineBlock',
			width: '100%',
			height: 'auto',

		},
		personImg: {
			height: 0,
			paddingBottom: '25%',
			paddingTop: '25%',
			width: '50%',
			// height: '100%',
			backgroundPositionX: 'center',
			backgroundPositionY: 'top',
			backgroundSize: 'contain',
			borderRadius: '50%',
			// objectFit: 'cover',
			backgroundImage: `url(${img})`
		},
		personTextCont: {
			flexBasis: '67%',
		}
	})

	const classes = useStyles();

	return (
		<div className={classes.person}>
			<div className={classes.personImgCont}>
				<div className={classes.personImg}></div>
				{/* <img className="personImg" src={img} /> */}
			</div>
			<div className={classes.personImgCont}>
				{name && <Typography>{name}</Typography>}
				{link && <Link color="primary">{link}</Link>}
			</div>
		</div>
	)
}

export default Person
