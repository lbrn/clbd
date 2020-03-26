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
  cont: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    flexShrink: 0,
    marginTop: theme.spacing(3),
  },
  innerCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    color: theme.palette.primary.dark,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    // <Container>
    <Grid container spacing={3} className={classes.cont}>
      <Grid item className={classes.innerCont} xs={12} sm={6}>
        <Link
          target="_blank"
          href="https://lsu.edu/accessibility"
          className={classes.link}
        >
          Accessibility statement
        </Link>
        <Link
          target="_blank"
          href="https://www.lsu.edu/privacy/index.php"
          className={classes.link}
        >
          Privacy Statement
        </Link>
        <Link
          target="_blank"
          href="https://lsu.edu/feedback"
          className={classes.link}
        >
          Provide Feedback
        </Link>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography className="smallFooter" variant="body2">
          Acknowledgements: The Center for Lung Biology and Disease is supported
          by the National Institute of General Medical Sciences of the National
          Institutes of Health under Award Number P20GM130555.
        </Typography>
      </Grid>
    </Grid>
    // </Container>
  );
};

export default Footer;
