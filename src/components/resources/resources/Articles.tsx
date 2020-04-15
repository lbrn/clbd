import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

export const Articles = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Articles</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          onClick={e =>
            navigate(
              'https://www.lsu.edu/research/recent_grant_successes/2020/0401-alexandranoel.php',
            )
          }
          variant="body1"
        >
          <Link>850K award won by Assistant Professor Alexandra Noël.</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate(
              'https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php',
            )
          }
          variant="body1"
        >
          <Link>11.5 Million Dollar Grant</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate('https://www.lsu.edu/vetmed/vet_news/saini_ones_award.php')
          }
          variant="body1"
        >
          <Link>Economic Development Win</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate('https://twitter.com/LSUVetMed/status/1226948778269167616')
          }
          variant="body1"
        >
          <Link>Dr. Weishan Huang receives $375,096 NIH award</Link>
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Articles;
