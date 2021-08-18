import React, { useState, Fragment, useEffect, useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Person from './Person';
import PersonPrev from './PersonPrev';
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
  var title = false;
  const [active, setActive] = useState(
    (location && location.state && location.state.code) || 'leadership',
  );
  const links = createLinks(history);

  useEffect(() => {
    setActive((location && location.state && location.state.code) || 'leadership');
  }, [location]);

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
  console.log (location.state.code);
  if (location.state.code.includes('pilotInvestigators') || location.state.code.includes('projectInvestigators')) {
    // console.log('success!');
    title = true;
    console.log (title);
  } else {
    // console.log('Failed!');
    title = false;
    console.log (title);

  }

  const createPrev = peopleData => {
      // return peopleData[active].prev.map((post) =>
      //  <div className="post prev">
      //  <span>
      //   {post.year}
      //  </span>
      //  <i>
      //   {post.name}
      //   , {post.degree}
      //  </i>
      //  </div>
      // );
      return peopleData[active].prev.map(person => (
        <PersonPrev
          isActive={person.isActive}
          key={person.name}
          name={person.name}
          title={person.title}
          mentors={person.mentors}
      role={person.role}
      id={person.id}
      year={person.year}
          degree={person.degree}
          link={person.link}
      img={person.image}
      code={person.code}
          abstract={person.abstract}
          institution={person.institution}
        />
      ));
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

           <Grid item xs={12}>
          <Typography variant="h5" align="center">
            {(location && location.state.displayName)}
          </Typography>
        </Grid>
        { /*} <Grid item xs={12}>
        <Typography variant="h5" align="center">
          {(location && location.state.displayName) || 'Leadership'}
        </Typography>
      </Grid> */}
      {data.prev}
        {data && createPeople(data)}
        </Grid>
        <Grid item xs={4} md={3}>

        </Grid>

        <Grid container justify="center" item xs={8} md={9} className="posts tworow">
        <Grid item xs={12}>
       <Typography variant="h5" align="center">


         {/* data.pilotInvestigators.code */}
         {title && <span> Former {(location && location.state.displayName)} </span>}
               {/* data.pilotInvestigators.code && <h2>          You have {data.pilotInvestigators.code} unread messages.        </h2> */}
       </Typography>
     </Grid>
        {data && createPrev(data)}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default People;
