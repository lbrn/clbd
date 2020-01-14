import React, { useState, Fragment } from "react";
import { Grid } from "@material-ui/core";

import Person from "./Person";
import GroupSelector from "./GroupSelector";

const People = ({ path, data }) => {
	const [active, setActive] = useState("investigators");

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
					title={person.title}
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
