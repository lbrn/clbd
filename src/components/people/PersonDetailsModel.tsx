import React, { useState, useEffect, Fragment } from 'react';
import { peopleData } from '../../data/peopleData';
import PersonDetails from './PersonDetails';

const PersonDetailsModel = props => {
  const [person, setPerson] = useState();
  const [data, setData] = useState();
  console.log(props);
  const code = props.code;
  
  useEffect(() => {
    setData(peopleData);
  }, []);

  useEffect(() => {
    setPerson(data && data[code]);
  }, [data]);

  return <Fragment>{person && <PersonDetails person={person} />}</Fragment>;
};

export default PersonDetailsModel;
