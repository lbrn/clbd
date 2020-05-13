import React, { useState, useEffect, Fragment } from 'react';
import { seminars } from '../../data/seminars';
import Seminar from './Seminar';
import {seminar as seminarType} from '../../types/seminar';

const SeminarModel = (props) => {
  const [seminar, setSeminar] = useState<undefined | seminarType>();
  const [data, setData] = useState<undefined | seminarType[]>();
  const id = props.id;
  
  useEffect(() => {
    setData(seminars);
  }, []);

  useEffect(() => {
    setSeminar(data && data.find(seminar => seminar.id === id));
  }, [data, id]);

  return <Fragment>{seminar && <Seminar seminar={seminar} />}</Fragment>;
};

export default SeminarModel;