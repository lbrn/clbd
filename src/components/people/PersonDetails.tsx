import React from 'react';
import { Typography, Avatar, Grid, makeStyles, Link } from '@material-ui/core';
import { theme } from '../../theme/theme';

const PersonDetails = props => {
  // these props are passed via react router
  const { img, mentors, role, name, title, link, institution, abstract, degree } =
    props.location && props.location.state;

  const useStyles = makeStyles({
    person: {
      marginTop: theme.spacing(3),
    },
    personImgCont: {
      display: 'flex',
      height: 'auto',
    },
    personImg: {
      height: 0,
      paddingBottom: '45%',
      paddingTop: '45%',
      width: '90%',
      // centers img on top center
      backgroundPositionX: 'center',
      backgroundPositionY: 'top',
      backgroundSize: 'contain',
      borderRadius: '50%',
      backgroundImage: `url(${img})`,
    },
    avatar: {
      width: '90%',
      paddingBottom: '45%',
      paddingTop: '45%',
      backgroundColor: theme.palette.primary.main,
    },

    link: {
      justifySelf: 'center',
      color: theme.palette.primary.main,
      textDecoration: 'none',
    },
  });

  const classes = useStyles();
  const createMentors = mentors => {
    const length = mentors.length;

    const mentorElements =  mentors.map((mentor, index) => (
      <Link href={mentor.link}>{`${mentor.name}${
        index < length - 1 ? ', ' : '.'
      }`}</Link>
    ));
    return mentorElements;
  };

  return (
    <Grid
      id="person-details"
      spacing={3}
      container
      justify="center"
      item
      xs={12}
      className={classes.person}
    >
      <Grid container item spacing={3} alignItems="center">
        <Grid item xs={4} className={classes.personImgCont}>
          {img && <div className={classes.personImg}></div>}
          {!img && <Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>}
        </Grid>
        <Grid item xs={8}>
  {name && <Typography>{name}, {degree}</Typography>}
          {role && <Typography>{role}</Typography>}
          {title && <Typography>{title}</Typography>}
          {/* target ensures a new tab.  nooopener is for security */}
          {link && institution && (
            <Link
              target="_blank"
              rel="noopener"
              href={link}
              className={classes.link}
            >
              {institution}
            </Link>
          )}
        </Grid>
        <Grid item xs={8}>
          {mentors && (
            <Typography>
              <strong>Mentors: </strong>
              {createMentors(mentors)}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          {abstract && (
            <Typography>
              <strong>Abstract: </strong>
              {abstract}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PersonDetails;
