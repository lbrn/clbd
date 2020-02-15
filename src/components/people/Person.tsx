import React from 'react';
import { makeStyles, Typography, Link, Grid, Avatar } from '@material-ui/core';
import { navigate } from '@reach/router';

import { theme, themeExtended } from '../../theme/theme';
import mentor from '../../models/mentor';

interface personProps {
  name: string;
  link: string | null;
  abstract?: string;
  institution?: string;
  title?: string;
  role?: string;
  img?: string;
  mentors?: mentor[];
}

const Person = ({
  name,
  mentors,
  link,
  title,
  role,
  img,
  institution,
  abstract,
}: personProps) => {
  const useStyles = makeStyles({
    person: {
      margin: theme.spacing(3),
      '&:hover': {
        backgroundColor: themeExtended.palette.primary.hover,
      },
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

  return (
    <Grid
      spacing={3}
      container
      justify="center"
      item
      xs={12}
      sm={5}
      className={classes.person}
      onClick={e =>
        navigate(`/people/individual/${name}`, {
          state: {
            name,
            mentors,
            link,
            title,
            role,
            img,
            institution,
            abstract,
          },
        })
      }
    >
      <Grid item xs={4} className={classes.personImgCont}>
        {img && <div className={classes.personImg}></div>}
        {!img && (
          <Avatar
            onClick={e =>
              navigate(`/people/individual/${name}`, {
                state: {
                  name,
                  mentors,
                  link,
                  title,
                  role,
                  img,
                  institution,
                  abstract,
                },
              })
            }
            className={classes.avatar}
          >
            {name.charAt(0)}
          </Avatar>
        )}
      </Grid>
      <Grid item xs={8}>
        {name && <Typography>{name}</Typography>}
        {role && <Typography>{role}</Typography>}
        {title && <Typography>{title}</Typography>}
        {/* target ensures a new tab.  nooopener is for security */}
        {link && institution && <Typography>{institution}</Typography>} <br />
        {/* {isExpanded && abstract && <Typography>{abstract}</Typography>} */}
        {mentors && (
          <Typography>
            {mentors.map(mentor => mentor.name).join(', ')}
          </Typography>
        )}
        {abstract && (
          <Link
            onClick={e =>
              navigate(`/people/individual/${name}`, {
                state: {
                  name,
                  mentors,
                  link,
                  title,
                  role,
                  img,
                  institution,
                  abstract,
                },
              })
            }
          ></Link>
        )}{' '}
        <br />
      </Grid>
    </Grid>
  );
};

export default Person;
