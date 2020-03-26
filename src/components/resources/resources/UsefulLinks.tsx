import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

export const UsefulLinks = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Useful Links</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          onClick={e =>
            navigate('https://lacatsfunding.pbrc.edu/lacobres/Default.aspx')
          }
          variant="body1"
        >
          <Link>Louisiana Clinical & Translations Science Center</Link>
        </Typography>
        <Typography
          onClick={e => navigate('https://lbrn.lsu.edu/')}
          variant="body1"
        >
          <Link>Louisiana Biomedical Research Network</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate('https://www.lsu.edu/vetmed/dlam/iacuc/iacuc.php')
          }
        >
          <Link>IACUC - Institutional Animal Care and Use Committee</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate(
              'https://www.lsu.edu/research/resources_for_faculty/research_compliance/institutional_review/IRB.php',
            )
          }
        >
          <Link>IRB - Institutional Review Board</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate('https://lsu.edu/ehs/research-safety/biological-safety')
          }
        >
          <Link>IBRDSC - Institutional Biosafety Committee</Link>
        </Typography>
        <Typography
          onClick={e =>
            navigate(
              'https://grants.nih.gov/grants/ElectronicReceipt/adobe_transition.htm',
            )
          }
        >
          <Link>NIH: Resources for Using Adobe Forms</Link>
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default UsefulLinks;
