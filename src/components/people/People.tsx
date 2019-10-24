import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import img from '../../assets/people/Cardin.jpg';

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
			<GroupSelector
				value={active}
				setValue={setActive}
			/>
			<Grid container spacing={3} justify="center">
				{data && data[active].map((person,) => (
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
