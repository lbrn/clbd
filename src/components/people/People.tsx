import React, { useState, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { theme } from '../../theme/theme';
import Person from './Person';
import GroupSelector from './GroupSelector';
import SideMenu from '../ui/SideMenu';

const People = ({ path, data }) => {
  const [active, setActive] = useState('investigators');
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const peopleMenuLinks = mainPeopleList.map(name => ({
    name,
    clickHandler: () => setActive(name),
  }));
  console.log(mainPeopleList);
  console.log(isMobile);
  return (
    <Fragment>
      <Grid container justify="center" item xs={12}>
        <Grid item xs={6}>
          {data && isMobile && (
            <GroupSelector
              key={'mainPeople'}
              title="group"
              value={active}
              setValue={setActive}
              menuItems={mainPeopleList}
            />
          )}
          {!isMobile && <SideMenu links={peopleMenuLinks} />}
        </Grid>
        {data && createPeople(data)}
      </Grid>
    </Fragment>
  );
};

export default People;
