import React from 'react';
import { AppBar, Typography, Grid, Toolbar, makeStyles, Container, Button } from '@material-ui/core';
import logoFull from '../assets/logo_full.png'

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	image: {
		objectFit: 'contain',
		maxHeight: '6vh',
	},
	appBar: {
		backgroundColor: theme.palette.common.white,
		paddingTop: '2vh',
		paddingBottom: '2vh',
	},
	buttonCont: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'space-between',
	},


})

const Header = () => {
	const classes = useStyles({})
	return (
		<AppBar position="sticky" className={classes.appBar} >
			<Toolbar>
				<Grid container justify="flex-start" alignContent="center" spacing={3}>
					<Grid item xs={6}>
						<img className={classes.image} src={logoFull} />
					</Grid>
					<Grid className={classes.buttonCont} container item spacing={1} xs={12} md={6}>
						<Grid item xs md>
							<Button color="primary">about</Button>
						</Grid>
						<Grid item xs >
							<Button color="primary">people</Button>
						</Grid>
						<Grid item xs>
							<Button color="primary">research</Button>
						</Grid>
						<Grid item xs>
							<Button color="primary">resources</Button>
						</Grid>
						<Grid item xs>
							<Button color="primary">events</Button>
						</Grid>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>

	)
}

export default Header
