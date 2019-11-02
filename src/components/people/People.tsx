import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography, makeStyles } from '@material-ui/core';

import { people } from '../../data/people';
import Person from './Person';
import GroupSelector from './GroupSelector';


const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState('leadership')
	const [activeMentee, setActiveMentee] = useState('none')
	useEffect(() => {
		setData(people)
	}, [])
	useEffect(() => {
		setActiveMentee('none')
	}, [active])

	// pass selection list to groupSelector
	// if activeMentee, pass mentors to Person creator

	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Grid container justify="center" item xs={12}>
					<Grid item xs={4}>
						<GroupSelector
							title="group"
							value={active}
							setValue={setActive}
						/>
						{active === 'mentees' && <GroupSelector
							title="mentee"
							value={activeMentee}
							setValue={setActiveMentee}
						/>}
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
						institution={person.institution}
					/>
					// </Grid>
				))}
			</Grid>
		</Container>
	)
}

export default People
