import React from 'react';
import { AppBar, Typography, Grid, Toolbar, makeStyles, Container } from '@material-ui/core';
import logoFull from '../assets/logo_full.png'

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	image: {
		objectFit: 'contain',
		maxHeight: 50,
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
	},
	appBar: {
		backgroundColor: theme.palette.common.white,
	}

})

const Header = () => {
	const classes = useStyles({})
	return (
		<AppBar className={classes.appBar} >
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
