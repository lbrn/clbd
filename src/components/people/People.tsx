import React, { useState, Fragment, useEffect, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Person from './Person';
import { createLinks } from '../people/PeopleLinks';
import SmartMenu from '../ui/SmartMenu';
import HistoryContext from '../contexts/HistoryContext';

interface peopleProps {
  path: string;
  data: any;
  location?: any;
}

const People = ({ path, data, location }: peopleProps) => {
  const history: any = useContext(HistoryContext);
  const [active, setActive] = useState(
    (location && location.state && location.state.code) || 'leadership',
  );
  const links = createLinks(history);

  useEffect(() => {
	  console.log(location)
    setActive((location && location.state && location.state.code) || 'leadership');
  }, [location]);
  console.log(location.state);

  const createPeople = peopleData => {
    if (data) {
      return peopleData[active].members.map(person => (
        <Person
          isActive={person.isActive}
          key={person.name}
          name={person.name}
          title={person.title}
          mentors={person.mentors}
		  role={person.role}
		  id={person.id}
          degree={person.degree}
          link={person.link}
		  img={person.image}
		  code={person.code}
          abstract={person.abstract}
          institution={person.institution}
        />
      ));
    }
  };
  const createPrev = peopleData => {
    // if (data) {
      // console.log("test");
      // console.log(peopleData);
      // console.log("test");
      return peopleData[active].prev.map((post) =>
       <div className="post prev">
       <i>
       {post.name}
       {post.year}
       </i>
       </div>
      );
    // }
  };


  return (
    <Fragment>
      <Grid  className="people" container spacing={3}>
        <Grid item xs={4} md={3}>
          <SmartMenu
            active={active}
            setActive={setActive}
            links={links}
            title="group"
          />
        </Grid>
        <Grid container justify="center" item xs={8} md={9}>
          {/* <Grid item xs={12}>
          <Typography variant="h5" align="center">
            {(location && location.state.displayName) || 'Leadership'}
          </Typography>
        </Grid> */}
        {data && createPeople(data)}
        </Grid>
        <Grid container justify="center" item xs={8} md={9} className="posts tworow">
        {data && createPrev(data)}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default People;
