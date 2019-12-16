import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';

import { people } from '../../data/people';
import Person from './Person';
import GroupSelector from './GroupSelector';


const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState('leadership')
	const [activeMentee, setActiveMentee] = useState('')
	useEffect(() => {
		setData(people)
	}, [])
	useEffect(() => {
		setActiveMentee('')
	}, [active])

	// gets keys for all groups in the people data structure
	const mainPeopleList = data && Object.keys(data);

	// makes a list of each mentee's name
	// const menteesList = data && data.mentees.map(mentee => mentee.name)

	const createPeople = (peopleData, activeMentee?: string) => {
		// if (data && activeMentee) {
		// selects activeMentee object
		// const selectedMentee = peopleData.mentees.find(mentee => mentee.name === activeMentee);
		// console.log(selectedMentee.mentors)
		// 	return selectedMentee.mentors.map(person => (
		// 		<Person
		// 			key={person.name}
		// 			name={person.name}
		// 			title={person.title}
		// 			setMentee={setActiveMentee}
		// 			role={person.role}
		// 			link={person.link}
		// 			img={person.image}
		// 			abstract={person.abstract}
		// 			institution={person.institution}
		// 		/>
		// 	))
		// } else if (data) {
		if (data){
			return peopleData[active].map((person) => (
				<Person
					key={person.name}
					name={person.name}
					group={active}
					title={person.title}
					setMentee={setActiveMentee}
					mentors={person.mentors}
					role={person.role}
					link={person.link}
					img={person.image}
					abstract={person.abstract}
					institution={person.institution}
				/>
			))
		}
	}

	return (
		<Container>
			<Grid container spacing={3} justify="center">
				<Grid container justify="center" item xs={12}>
					<Grid item xs={4}>
						{data &&
							<GroupSelector
								key={'mainPeople'}
								title="group"
								value={active}
								setValue={setActive}
								menuItems={mainPeopleList}
							/>}
					</Grid>
				</Grid>
				{data && createPeople(data, activeMentee)}
			</Grid>
		</Container>
	)
}

export default People
