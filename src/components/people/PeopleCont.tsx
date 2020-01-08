import React from 'react'
import { Grid, Container } from "@material-ui/core";
import { Router, navigate } from '@reach/router';

import People from './People';
import PersonDetails from './PersonDetails';
import classes from '*.module.css';

const PeopleCont = (props) => {
	return (
		<Container>
			<Grid id="peopleCont" xs={12} container spacing={3} justify="center">
				<Grid container item xs={12}>
					<Router>
						<People path="/" />
						<PersonDetails path="individual/:name" />
					</Router>
				</Grid>
			</Grid>
		</Container>
	)
}

export default PeopleCont
