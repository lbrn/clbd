import React from 'react';
import { Typography, Grid, Container, makeStyles, List, ListItem, ListItemText } from '@material-ui/core';
import { theme } from '../../../theme/theme';
import NihAcknowledgement from './resources/NihAcknowledgement';
import { navigate, Router } from '@reach/router';
import Disclaimer from './resources/Disclaimer';
import UsefulLinks from './resources/UsefulLinks';
import Core from './resources/Core';

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
							<ListItemText onClick={e => navigate("/resources/nih")} primary="NIH Acknowledgement" />
						</ListItem>
						<ListItem button>
							<ListItemText onClick={e => navigate("/resources/disclaimer")} primary="Disclaimer" />
						</ListItem>
						<ListItem button>
							<ListItemText onClick={e => navigate("/resources/useful-links")} primary="Useful Links" />
						</ListItem><ListItem button>
							<ListItemText onClick={e => navigate("/resources/core/pulmonary immunopathology core ")} primary="Pulmonary Immunopathology Core" />
						</ListItem>
						<ListItem button>
							<ListItemText onClick={e => navigate("/resources/core/molecular biology core ")} primary="Molecular Biology Core " />
						</ListItem>
					</List>
				</Grid>
				<Grid container item xs={12} sm={8}>
					<Router>
						<NihAcknowledgement path="nih" />
						<Disclaimer path="disclaimer" />
						<UsefulLinks path="useful-links" />
						<Core path="core/:name" links={
							[{ title: 'Amazon', link: "https://www.amazon.com" }]
						}/>
					</Router>
				</Grid>

			</Grid>

		</Container>
	)
}

export default Resources
