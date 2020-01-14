import React, { useState, useEffect } from 'react';
import { Typography, Grid, Container, makeStyles } from '@material-ui/core';

import { theme } from '../../theme/theme';
import { seminars } from '../../data/seminars';

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(3)
	}
})
const Seminar = (props) => {
	const classes = useStyles()
	const [seminar, setSeminar] = useState()

	useEffect(() => {
		// index comes from url
		setSeminar(seminars[props.seminarIndex])
	}, [])

	return (
		<Container className={classes.cont}>
			<Grid container>
				{seminar && <Grid item xs={12}>
					<Typography variant="h4">{seminar.title}</Typography>
					<Typography variant="h5">{seminar.date.format('MM/DD/YY')}</Typography>
					<Typography variant="body1">{seminar.time && seminar.time}</Typography>
					<Typography variant="body1">{seminar.location && seminar.location}</Typography>
					<Typography variant="body1">Speakers for this event: {seminar.speakers && seminar.speakers}</Typography>
					<Typography variant="body1">Cost: {seminar.cost && seminar.cost}</Typography>
				</Grid>}
			</Grid>

		</Container>
	)
}

export default Seminar
