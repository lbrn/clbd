import React from 'react';
import { Typography, Avatar, Grid, makeStyles, Link } from '@material-ui/core';
import { theme } from '../../theme/theme';
import person from '../../types/person';

interface PersonDetails {
  person: person;
}
const PersonDetails = ({ person }: PersonDetails) => {
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
      backgroundSize: 'cover',
      borderRadius: '50%',
      backgroundImage: `url(${person.image})`,
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

    const mentorElements = mentors.map((mentor, index) => (
      <Link key={mentor.name} href={mentor.link}>{`${mentor.name}${
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
        {person && (
          <Grid item xs={4} className={classes.personImgCont}>
            {person.image && <div className={classes.personImg}></div>}
            {!person.image && (
              <Avatar className={classes.avatar}>
                {person.name.charAt(0)}
              </Avatar>
            )}
          </Grid>
        )}
        {person && (
          <Grid item xs={8}>
            {person.name && (
              <Typography>
                {person.name}, {person.degree}
              </Typography>
            )}
            {person.role && <Typography>{person.role}</Typography>}
            {person.title && <Typography>{person.title}</Typography>}
            {/* target ensures a new tab.  nooopener is for security */}
            {person.link && (
              <Link
                target="_blank"
                rel="noopener"
                href={person.link}
                className={classes.link}
              >
                {person.institution || 'Email'}
              </Link>
            )}
          </Grid>
        )}
        {person && (
          <Grid item xs={8}>

          </Grid>
        )}
      </Grid>
      <Grid container item spacing={3}>
        {person && (
          <Grid item xs={12}>
            {person.abtitle && (
              <Typography>
                <strong>Abstract Title: </strong>
                {person.abtitle}
              </Typography>
            )}
            {person.abstract && (
              <Typography>
                <strong>Abstract: </strong>
                {person.abstract}
              </Typography>
            )}
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default PersonDetails;
