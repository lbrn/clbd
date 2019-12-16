import React, { Fragment } from 'react';
import { makeStyles, Button, Grid, Container } from '@material-ui/core'
import beakerImage from '../assets/misc/beakers.jpg';

import { theme } from '../theme/theme';
import ContentPreviewItem from './ContentPreviewItem';
import ContentPreview from './ContentPreview';
import HeroStory from './HeroStory';

const useStyles = makeStyles({
	background: {
		height: `500px`,
		// width: '100%', 
		backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .7), rgba(19, 127, 222, .6)), url(${beakerImage})`,
		backgroundSize: 'cover',
		filter: 'sepia(25%)'
	},
})

const Hero = ({ path }) => {
	const classes = useStyles({})
	return (
		<Fragment>
			<Grid container className={classes.background} justify="center" alignContent="center" spacing={3}>
				<ContentPreview />
			</Grid>
			<HeroStory />
		</Fragment>
	)
}

export default Hero
