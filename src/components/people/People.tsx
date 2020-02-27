import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import Person from './Person';
import SmartMenu from '../ui/SmartMenu';

interface peopleProps {
  path: string;
  data: any;
  location?: any;
}

const People = ({ path, data, location }: peopleProps) => {
  const [active, setActive] = useState((location && location.state.code) || 'leadership');

  // gets keys for all groups in the people data structure
  const mainPeopleList = data && Object.keys(data);

  // makes a list of each mentee's code
  // const menteesList = data && data.mentees.map(mentee => mentee.code)

  const createPeople = peopleData => {
    if (data) {
      return peopleData[active].members.map(person => (
        <Person
          key={person.name}
          name={person.name}
          title={person.title}
          mentors={person.mentors}
          role={person.role}
          degree={person.degree}
          link={person.link}
          img={person.image}
          abstract={person.abstract}
          institution={person.institution}
        />
      ));
    }
  };

  const peopleMenuLinks = mainPeopleList.map(code => ({
    code: code,
    clickHandler: () => setActive(code),
    displayName: data[code].displayName,
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
            />
          )}
        </Grid>
        {data && createPeople(data)}
      </Grid>
    </Fragment>
  );
};

export default People;
