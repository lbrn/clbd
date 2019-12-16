import React from 'react'
import { Grid, Container } from "@material-ui/core";
import { Router } from '@reach/router';

import People from './People';
import PersonDetails from './PersonDetails';

const PeopleCont = (props) => {
	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Router>
					<People path="/" />
					<PersonDetails path=":name" />
				</Router>
			</Grid>
		</Container>
	)
}

export default PeopleCont
