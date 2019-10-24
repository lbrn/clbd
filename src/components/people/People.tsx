import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import img from '../../assets/people/Cardin.jpg'

import { people } from '../../data/people';
import Person from './Person';

const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState('leadership')

	{/* {data && data[active]
				.map(person => person.name)
				.join(', ')} */}

	useEffect(() => {
		setData(people)
	}, [])

	const activeData = data && data[active];

	return (
		<Container>
			<Grid container spacing={3} justify="center">
				{data && data[active].map((person, i) => (
					<Grid item xs={6} key={person.name + i}>
						<Person
							name={person.name}
							link={person.link}
							img={img}
						/>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default People
