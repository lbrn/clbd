import React, { useState, useEffect, Fragment } from "react";
import { Grid } from "@material-ui/core";

import { people } from "../../data/people";
import Person from "./Person";
import GroupSelector from "./GroupSelector";

const People = ({ path }) => {
	const [data, setData] = useState();
	const [active, setActive] = useState("leadership");
	// const [activeMentee, setActiveMentee] = useState('')
	useEffect(() => {
		setData(people);
	}, []);
	// useEffect(() => {
	// 	setActiveMentee('')
	// }, [active])

	// gets keys for all groups in the people data structure
	const mainPeopleList = data && Object.keys(data);

	// makes a list of each mentee's name
	// const menteesList = data && data.mentees.map(mentee => mentee.name)

	const createPeople = peopleData => {
		if (data) {
			return peopleData[active].map(person => (
				<Person
					key={person.name}
					name={person.name}
					// group={active}
					title={person.title}
					// setMentee={setActiveMentee}
					mentors={person.mentors}
					role={person.role}
					link={person.link}
					img={person.image}
					abstract={person.abstract}
					institution={person.institution}
				/>
			));
		}
	};

	return (
		<Fragment>
			<Grid container justify='center' item xs={12}>
				<Grid item xs={12}>
					{data && (
						<GroupSelector
							key={"mainPeople"}
							title='group'
							value={active}
							setValue={setActive}
							menuItems={mainPeopleList}
						/>
					)}
				</Grid>
				{data && createPeople(data)}
			</Grid>
		</Fragment>
	);
};

export default People;
