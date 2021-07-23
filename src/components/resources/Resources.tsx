import React, { useState, useContext } from 'react';
import { Grid, Container, makeStyles } from '@material-ui/core';
import { Router } from '@reach/router';

import { theme } from '../../theme/theme';
import HistoryContext from '../../components/contexts/HistoryContext';
import NihAcknowledgement from './resources/NihAcknowledgement';
import Disclaimer from './resources/Disclaimer';
import Media from './resources/Media';
import UsefulLinks from './resources/UsefulLinks';
import Articles from './resources/Articles';
import MolecularCore from './resources/MolecularCore';
import PulmonaryCore from './resources/PulmonaryCore';
import SmartMenu from '../ui/SmartMenu';
import { createLinks } from './ResourcesLinks';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
});

const Resources = props => {
  const history: any = useContext(HistoryContext);
  const [active, setActive] = useState('');
  const classes = useStyles({});

  const links = createLinks(history);

  return (
    <Container className={classes.cont} maxWidth={false}>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={4} md={3}>
          <SmartMenu
            active={active}
            links={links}
            setActive={setActive}
            title="resources"
          />
        </Grid>
        <Grid container item xs={12} sm={8} md={9} className="dog">
          <Router>
            <NihAcknowledgement path="nih" />
            <Disclaimer path="disclaimer" />
            <UsefulLinks path="useful-links" />
            <Media path="media" />
            <Articles path="articles" />
            <PulmonaryCore path="pulmonary-core" />
            <MolecularCore path="molecular-core" />
          </Router>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Resources;
