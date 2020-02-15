import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Person from './Person';
import SmartMenu from '../ui/SmartMenu';

const People = ({ path, data }) => {
  const [active, setActive] = useState('leadership');

  // gets keys for all groups in the people data structure
  const mainPeopleList = data && Object.keys(data);

  // makes a list of each mentee's name
  // const menteesList = data && data.mentees.map(mentee => mentee.name)

  const createPeople = peopleData => {
    if (data) {
      return peopleData[active].members.map(person => (
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

  const peopleMenuLinks = mainPeopleList.map(name => ({
    name: name,
    clickHandler: () => setActive(name),
    displayName: data[name].displayName,
  }));

  return (
    <Fragment>
      <Grid container justify="center" item xs={12}>
        <Grid item xs={6}>
          {data && (
            <SmartMenu
              title="group"
              links={peopleMenuLinks}
              setActive={setActive}
              active={active}
              // nameList={mainPeopleList}
            />
          )}
        </Grid>
        {data && createPeople(data)}
      </Grid>
    </Fragment>
  );
};

export default People;
