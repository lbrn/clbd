import React, { useEffect, useState } from 'react';
import { Card, Grid, CardContent, Typography, Container, makeStyles, CardMedia } from '@material-ui/core';
import { navigate, Router } from '@reach/router';

import { seminars } from '../../data/seminars';
import { theme } from '../../theme/theme';
import Seminar from './Seminar';

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(3),
	},
	cardImage: {
		height: 200,
		filter: 'grayscale(70%)',
		transition: 'all .5s',
		'&:hover': {
			filter: 'grayscale(40%)'
		}
	},
	card: {
		backgroundColor: '#fff',
		transition: 'all .5s',
		'&:hover': {
			backgroundColor: `rgba(19, 127, 222, .2)`,
			cursor: 'pointer',
		},
		// select child class
		'&:hover $cardImage': {
			filter: 'grayscale(40%)',
		},
	}
})

const Seminars = ({ path }) => {
	const classes = useStyles({})
	const [data, setData] = useState();

	useEffect(() => {
		setData(seminars)
	},[])

	const createCards = (seminars) => {
		return seminars.map((seminar, index) => (
			<Grid key={`${seminar.name}${index}`} item xs={4}>
				<Card onClick={e => navigate(`/event/${index}`)} className={classes.card}>
					<CardMedia image={seminar.image} className={classes.cardImage} />
					<CardContent>
						<Typography variant="h5">
							{seminar.name && seminar.name}
						</Typography>
						<Typography variant="body1">
							{seminar.date && seminar.date.format('MM/DD/YY')}
						</Typography>
						<Typography variant="body2">
							{seminar.eventType && seminar.eventType}
						</Typography>
					</CardContent>
				</Card>
			</Grid >

		))
	}

	return (
		<Container className={classes.cont}>
			<Grid spacing={3} container item>
				{data && createCards(data)}
			</Grid>
		</Container>

	)
}

export default Seminars