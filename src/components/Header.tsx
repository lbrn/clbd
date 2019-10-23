import React from 'react';
import { AppBar, Typography, Grid, Toolbar, makeStyles, Container } from '@material-ui/core';
import logoFull from '../assets/logo_full.png'

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	image: {
		objectFit: 'contain',
		maxHeight: '6vh',
		marginTop: '2vh',
		marginBottom: '2vh',
	},
	appBar: {
		backgroundColor: theme.palette.common.white,
	}

})

const Header = () => {
	const classes = useStyles({})
	return (
		<AppBar position="sticky" className={classes.appBar} >
			<Toolbar>
				<Grid container justify="flex-start" spacing={3}>
					<Grid item xs={6}>
						<img className={classes.image} src={logoFull} />
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>

	)
}

export default Header
