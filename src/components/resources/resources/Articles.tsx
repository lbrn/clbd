import React, { Fragment } from 'react';
import { Grid, Typography, Link, Container } from '@material-ui/core';
import { navigate } from '@reach/router';
import {StoriesSmall} from '../../stories/Stories';

export const Articles = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
      <Typography variant="h5">News Articles</Typography>
      </Grid>
      <Grid item xs={12}>
      <Typography
        onClick={e =>
          navigate('https://www.lsu.edu/vetmed/vet_news/teaching_awards_2021.php')
        }
        variant="body1"
      >
        <Link>CLBD project investigators receive prestigious Research Excellence and Distinguished Scholar Awards</Link>
      </Typography>
      <Typography
        onClick={e =>
          navigate('https://www.lsu.edu/vetmed/vet_news/lung_biology_and_covid.php')
        }
        variant="body1"
      >
        <Link>LSU SVM Center for Lung Biology and Disease investigates lung and lung-related heart diseases during the COVID-19 pandemic</Link>
      </Typography>
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
        <Typography
          onClick={e =>
            navigate('https://reporter.nih.gov/search/3eVRPXLG3USXXnhTMmk5ZQ/project-details/10078618#publications')
          }
          variant="body1"
        >
          <Link>Publications resulting from the Grant</Link>
        </Typography>
        <Grid item xs={12}>
        <div className="header">
        <Typography align="center" color="primary" variant="h4">
        Stories
        </Typography>
        </div>
        </Grid>
        <StoriesSmall />
      </Grid>
      
    </Fragment>
  );
};

export default Articles;
