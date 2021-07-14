import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import article from '../../types/article';
import { theme } from '../../theme/theme';

const useStyles = makeStyles({
  imgCont: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyItems: 'center',
    justifyContent: 'center',
    height: '25vh',
  },
  img: {
    // backgroundImage: `url(${heroImg})`,
    objectFit: 'contain',
    // backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    maxHeight: 200,
  },
  outerCont: {
    marginTop: theme.spacing(3),
    width: '100%',
    marginLeft: 10,
  },
});
interface storyProps {
  article: article;
}
const Story = ({ article }: storyProps) => {
  const classes = useStyles({});
  return (
    <Grid xs={12} container item spacing={3} alignItems="center">
      <Grid item xs={12} sm={6}>
        <img className={classes.img} src={article.image} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">{article.title}</Typography>
        <Typography variant="body1">{article.contentPreview}</Typography>
        <Link variant="body1" href={article.link}>
        ...view more
        </Link>
      </Grid>
      <Grid item xs={12}>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
  );
};

export default Story;
