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
			display: 'flex',
			flexGrow: 1,
			flexShrink: 1
		},
		personImgCont: {
			flexBasis: '33%',

		},
		personImg: {
			borderRadius: '50%',
			border: `solid 3px ${theme.palette.primary.main}`,
			maxWidth: "100%",
			maxHeight: 'auto',
			backgroundUrl: `url(${img})`
		},
		personTextCont: {
			flexBasis: '67%',
		}
	})

	const classes = useStyles();


	return (
		<div className={classes.person}>
			<div className="personImgCont">
				<Typography>image goes here</Typography>
			</div>
			<div className="personTextCont">
				{name && <Typography>{name}</Typography>}
				{link && <Link color="primary">{link}</Link>}
			</div>
		</div>
	)
}

export default Person
