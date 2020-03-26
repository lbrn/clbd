import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Container,
  Link,
} from '@material-ui/core';

import { theme } from '../theme/theme';

const useStyles = makeStyles({
  innerCont: {
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(3),
  },
  outerCont: {
    height: 120,
    position: 'sticky',
    bottom: 0,
    width: '100%',
  },
  link: {
    color: theme.palette.primary.dark,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Container className={classes.outerCont}>
      <Grid container spacing={3} className={classes.innerCont}>
        <Grid container item xs={6} sm={6}>
          <Grid item xs>
            <Link href="https://lsu.edu/accessibility" className={classes.link}>
              Accessibility statement
            </Link>
          </Grid>
          <Grid item xs>
            <Link
              href="https://www.lsu.edu/privacy/index.php"
              className={classes.link}
            >
              Privacy Statement
            </Link>
          </Grid>
          <Grid item xs>
            <Link href="https://lsu.edu/feedback" className={classes.link}>
              Provide Feedback
            </Link>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={6}>
          <Typography className="smallFooter" variant="body2">
            Acknowledgements: The Center for Lung Biology and Disease is
            supported by the National Institute of General Medical Sciences of
            the National Institutes of Health under Award Number P20GM130555.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
