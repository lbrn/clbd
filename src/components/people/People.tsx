import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, makeStyles } from '@material-ui/core';

import { people } from '../../data/people';
import Person from './Person';
import GroupSelector from './GroupSelector';


const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState('leadership')
	useEffect(() => {
		setData(people)
	}, [])

	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Grid container justify="center" item xs={12}>
					<Grid item xs={4}>
						<GroupSelector
							value={active}
							setValue={setActive}
						/>
					</Grid>
				</Grid>
				{data && data[active].map((person, ) => (
					// <Grid container item xs={6} key={person.name + i}>
					<Person
						key={person.name}
						name={person.name}
						title={person.title}
						role={person.role}
						link={person.link}
						img={person.image}
					/>
					// </Grid>
				))}
			</Grid>
		</Container>
	)
}

export default People
