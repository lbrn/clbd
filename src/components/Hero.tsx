import React from 'react';
import { makeStyles, Button, Grid, Container } from '@material-ui/core'
import beakerImage from '../assets/misc/beakers.jpg';

import { theme } from '../theme/theme';
import ContentPreviewItem from './ContentPreviewItem';
import ContentPreview from './ContentPreview';

const useStyles = makeStyles({
	background: {
		height: `90vh`,
		width: '100%',
		backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .7), rgba(19, 127, 222, .6)), url(${beakerImage})`,
		backgroundSize: 'cover',
		filter: 'sepia(25%)'
	},
})

const Hero = ({ path }) => {
	const classes = useStyles({})
	return (
		<Grid container className={classes.background} justify="center" alignContent="center" spacing={3}>
			<ContentPreview />
		</Grid>
	)
}

export default Hero
