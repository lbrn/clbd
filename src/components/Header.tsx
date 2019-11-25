import React from 'react';
import { AppBar, Grid, Toolbar, makeStyles, Link } from '@material-ui/core';
import logoFull from '../assets/misc/logo_full.png';
import { navigate } from '@reach/router'

import { theme } from '../theme/theme';

const useStyles = makeStyles({
	image: {
		objectFit: 'contain',
		maxHeight: '6vh',
		cursor: 'pointer'
	},
	appBar: {
		backgroundColor: theme.palette.common.white,
		paddingTop: '2vh',
		paddingBottom: '2vh',
	},
	linksCont: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	link: {
		cursor: 'pointer',
		fontSize: '165%'
	},

})

const Header = () => {
	const classes = useStyles({})
	return (
		<AppBar position="sticky" className={classes.appBar} >
			<Toolbar>
				<Grid container justify="flex-start" alignContent="center" spacing={3}>
					<Grid item xs={12} sm={6}>
						<img onClick={e => navigate('/')} className={classes.image} src={logoFull} alt="CLBD logo" />
					</Grid>
					<Grid className={classes.linksCont} container item spacing={1} xs={12} sm={8} md={6}>
							<Link variant="body1" className={classes.link} onClick={e => navigate('/about')} color="primary">About</Link>
							<Link variant="body1" className={classes.link} onClick={e => navigate('/people')} color="primary">People</Link>
							<Link variant="body1" className={classes.link} onClick={e => navigate('/resources')} color="primary">Resources</Link>
							<Link variant="body1" className={classes.link} onClick={e => navigate('/events')} color="primary">Events</Link>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>

	)
}

export default Header
