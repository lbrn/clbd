import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import Hero from '../Hero';
import About from '../about/About';
import Seminars from '../seminars/Seminars';
import SeminarModel from '../seminars/SeminarModel';
import Resources from '../resources/Resources';
import Media from '../resources/resources/Media';
import NihAcknowledgement from '../resources/resources/NihAcknowledgement';
import PeopleCont from '../people/PeopleCont';
import PersonDetailsModel from '../people/PersonDetailsModel';
import People from '../people/People';
import Disclaimer from '../resources/resources/Disclaimer';
import UsefulLinks from '../resources/resources/UsefulLinks';
import Articles from '../resources/resources/Articles';
import Stories_Page_Const from '../stories/Stories_Page';
import MolecularCore from '../resources/resources/MolecularCore';
import PulmonaryCore from '../resources/resources/PulmonaryCore';

const RouterWrapper = () => {
  return (
    <Fragment>
      <Router>
        <Hero path="/" />
        <About path="about" />
        <PeopleCont path="people">
          <People path="/:group" data="/:group" />
          <PersonDetailsModel path="individual/:code" />
        </PeopleCont>
        <Seminars path="events" />
        <Stories_Page_Const path="stories" />
        <SeminarModel path="event/:id" />
        <Resources path="resources">
          <NihAcknowledgement path="nih" />
          <Disclaimer path="disclaimer" />
          <UsefulLinks path="useful-links" />
          <Articles path="articles" />
          <Media path="media" />
          <MolecularCore path="molecular-core" />
          <PulmonaryCore path="pulmonary-core" />
        </Resources>
      </Router>
    </Fragment>
  );
};

export default RouterWrapper;
