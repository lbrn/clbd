import React from 'react';
import { makeStyles, Button, Grid, Container } from '@material-ui/core'
import beakerImage from '../assets/beakers.jpg';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	background: {
		height: `90vh`,
		width: '100%',
		backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .7), rgba(19, 127, 222, .6)), url(${beakerImage})`,
		backgroundSize: 'cover',
		filter: 'sepia(25%)'
	},
	buttonCont: {
		display: 'flex',
		justifyContent: 'center'
	},
	buttonWhite: {
		color: theme.palette.common.white,
		borderColor: theme.palette.common.white
	}
})

const Hero = ({path}) => {
	const classes = useStyles({})
	return (
		<Grid container className={classes.background} justify="center" alignContent="center">
			<Grid item xs className={classes.buttonCont}>
				<Button className={classes.buttonWhite} variant="outlined" color="primary">Grant requests & news</Button>
			</Grid>
			<Grid item xs className={classes.buttonCont}>
				<Button variant="contained" color="primary">Recent articles</Button>
			</Grid>
		</Grid>
	)
}

export default Hero
