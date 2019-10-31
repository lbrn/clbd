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
	linkCont: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'space-between',
	},
	link: {
		cursor: 'pointer',
		// textDecoration: 'none',
	}
})

const Header = () => {
	const classes = useStyles({})
	return (
		<AppBar position="sticky" className={classes.appBar} >
			<Toolbar>
				<Grid container justify="flex-start" alignContent="center" spacing={3}>
					<Grid item xs={12} sm={6}>
						<img onClick={e => navigate('/')} className={classes.image} src={logoFull} />
					</Grid>
					<Grid className={classes.linkCont} container item spacing={1} xs={12} sm={8} md={6}>
						<Grid item xs md>
							<Link variant="body1" className={classes.link} onClick={e => navigate('/about')} color="primary">about</Link>
						</Grid>
						<Grid item xs >
							<Link variant="body1" className={classes.link} onClick={e => navigate('/people')} color="primary">people</Link>
						</Grid>
						{/* <Grid item xs>
							<Link className={classes.link} color="primary">research</Link>
						</Grid>
						<Grid item xs>
							<Link className={classes.link} color="primary">resources</Link>
						</Grid>
						<Grid item xs>
							<Link className={classes.link} color="primary">events</Link> */}
						{/* </Grid> */}
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>

	)
}

export default Header
