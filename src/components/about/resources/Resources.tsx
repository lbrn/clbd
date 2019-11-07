import React from 'react';
import { Typography, Grid, Container, makeStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { theme } from '../../../theme/theme';
import NihAcknowledgement from './resources/NihAcknowledgement';
import { navigate, Router } from '@reach/router';
import Disclaimer from './resources/Disclaimer';

const useStyles = makeStyles({
	cont: {
		marginTop: theme.spacing(3)
	},
	list: {
		width: '100%',
		backgroundColor: `rgba(19, 127, 222, .2)`
	}
})

const Resources = ({ path, children }) => {
	const classes = useStyles({})
	return (
		<Container className={classes.cont}>
			<Grid spacing={3} container>
				<Grid item xs={12}>
					<Typography variant="h4">
						CLBD resources
					</Typography>
				</Grid>
				<Grid item xs={12} sm={4}>
					<List className={classes.list}>
						<ListItem button>
							<ListItemText onClick={e => navigate("/resources/nih")} primary="NIH Acknowledgement"></ListItemText>
						</ListItem>
						<ListItem button>
							<ListItemText onClick={e => navigate("/resources/disclaimer")} primary="Disclaimer"></ListItemText>
						</ListItem>
					</List>
				</Grid>
				<Grid container item xs={12} sm={8}>
					<Router>
						<NihAcknowledgement path="nih" />
						<Disclaimer path="disclaimer" />
					</Router>
				</Grid>

			</Grid>

		</Container>
	)
}

export default Resources
