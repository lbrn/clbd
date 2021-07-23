import React from 'react';
import { makeStyles, Typography, Link, Grid, Avatar } from '@material-ui/core';
import { navigate } from '@reach/router';

import { theme, themeExtended } from '../../theme/theme';
import person from '../../types/person';

const Person = ({
  name,
  mentors,
  link,
  title,
  role,
  degree,
  img,
  code,
  institution,
  abstract,
  isActive,
}: person) => {
  const useStyles = makeStyles({
    person: {
      margin: theme.spacing(3),
      '&:hover, &:focus': {
        cursor: 'pointer',
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
      backgroundSize: 'cover',
      borderRadius: '50%',
      backgroundImage: `url(${img})`,
    },
    avatar: {
      width: '90%',
      paddingBottom: '45%',
      paddingTop: '45%',
      backgroundColor: theme.palette.primary.main,
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
      tabIndex={1}
      onClick={e =>
        navigate(`/people/individual/${code}`, {
          state: {
			code,
			degree,
            abstract,
            img,
            institution,
            isActive,
            link,
            mentors,
            name,
            role,
            title,
          },
        })
      }
    >
      <Grid item xs={4} className={classes.personImgCont}>
        {img && <div className={classes.personImg}></div>}
        {!img && (
          <Avatar
            onClick={e =>
              navigate(`/people/individual/${code}`, {
                state: {
				  code,
				  title,
                  abstract,
                  degree,
                  img,
                  institution,
                  isActive,
                  link,
                  mentors,
                  name,
                  role,
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
        {name && (
          <Typography>
            {name}
            {degree && <span>, {degree}</span>}
          </Typography>
        )}
        {role && <Typography>{role}</Typography>}
        {title && <Typography>{title}</Typography>}
        {/* target ensures a new tab.  nooopener is for security */}
        {link && institution && <Typography>{institution}</Typography>} <br />
        {abstract && (
          <Link
            onClick={e =>
              navigate(`/people/individual/${code}`, {
                state: {
                  name,
                  mentors,
                  link,
                  title,
                  role,
				  img,
				  code,
                  institution,
                  abstract,
                  isActive,
                },
              })
            }
          ></Link>
        )}
        <br />
      </Grid>
    </Grid>
  );
};

export default Person;
