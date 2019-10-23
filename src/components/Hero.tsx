import React from 'react';
import { makeStyles } from '@material-ui/core'
import beakerImage from '../assets/beakers.jpg'

const useStyles = makeStyles({
	background: {
		height: '100vh',
		width: '100%',
		backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, .7), rgba(19, 127, 222, .6)), url(${beakerImage})`,
		backgroundSize: 'cover',
		filter: 'sepia(25%)'
	}
})

const Hero = () => {
	const classes = useStyles({})
	return (
		<div className={classes.background}>

		</div>
	)
}

export default Hero
