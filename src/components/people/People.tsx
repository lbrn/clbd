import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import img from '../../assets/people/Cardin.jpg';

import { people } from '../../data/people';
import Person from './Person';

const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState('leadership')
	useEffect(() => {
		setData(people)
	}, [])

	const activeData = data && data[active];

	return (
		<Container>
			<Grid container spacing={3} justify="flex-end">
				{data && data[active].map((person, i) => (
					<Grid item xs={6} key={person.name + i}>
						<Person
							name={person.name}
							title={person.title}
							role={person.role}
							link={person.link}
							img={person.image}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default People
