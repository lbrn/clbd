import React from 'react';
import {
  Typography,
  Grid,
  Container,
  makeStyles,
  Link,
} from '@material-ui/core';

import { theme } from '../../theme/theme';

const useStyles = makeStyles({
  cont: {
    marginTop: theme.spacing(3),
  },
  pdf: {
    width: '100%',
    // height: 200,
  },
  map: {
    marginTop: '5vh',
    width: '100%',
    height: 450,
    frameborder: 0,
    border: 0,
    allowfullscreen: '',
  },
});

const CovidAnnouncement = ({ announcement }) => {
  const classes = useStyles();

  return (
    <Container className={classes.cont}>
      <Grid container spacing={3}>
        {announcement && (
          <Grid container item xs={12} sm={8}>
            <Grid item xs={12}>
              <Typography variant="h4">{announcement.title}</Typography>
              <Typography variant="body1">
                For Coronavirus (COVID-19) information please check your local
                administrative websites accordingly. You can also check on
                information here: <br />
              </Typography>

              <Typography variant="body1">
                <ul>
                  <li>
                    <Link href="https://www.nih.gov/health-information/coronavirus">
                      NIH Coronavirus (COVID-19) Information
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.cdc.gov/coronavirus/2019-ncov/index.html">
                      CDC Coronavirus (COVID-19) Information
                    </Link>
                  </li>
                  <li>
                    <Link href="http://ldh.la.gov/coronavirus/">
                      Louisiana Department of Health Coronavirus (COVID-19)
                      Information
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.lsu.edu/coronavirus/index.php">
                      LSU Coronavirus Updates and Information
                    </Link>
                  </li>
                  <li>
                    <Link href="https://lsu.edu/vetmed/disaster_preparedness/coronavirus_updates.php">
                      LSU School of Veterinary Medicine Coronavirus Updates
                    </Link>
                  </li>
                </ul>
              </Typography>
              <Typography variant="body1">
                Please take precautions to avoid spreading the virus to the high
                risk population. Continue to listen to your local and state
                officials, college and university directives, and make sure
                you're in touch with your immediate supervisors, etc. to keep
                track of updates and what you should be doing at this time.
                <br />- CLBD Administration
              </Typography>
            </Grid>
          </Grid>
        )}
        {announcement && announcement.image && (
          <Grid container item xs={12} sm={4}>
            <a href={announcement.pdfLink}>
              <img
                alt="announcement image"
                src={announcement.image}
                className={classes.pdf}
              ></img>
            </a>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default CovidAnnouncement;
