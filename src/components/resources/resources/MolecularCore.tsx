import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';


const MolecularCore = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Molecular Biology Core</Typography>
      <br />
      <Typography>
      The Molecular Biology (MB) Core is housed at the School of Veterinary Medicine which provides a wide range of gene analysis and technical expertise to researchers in the state of Louisiana. The core characterizes inflammatory responses in the lung and extrapulmonary organs before, during and after infectious and non-infectious inflammation at the transcriptional level.
      </Typography>
      <br />
      <Typography>
      The core provides one-on-one training to investigators and their lab members. If you would like to discuss about your training needs or obtain additional details about services provided by the MB Core, please contact the Project Lead or Co-Investigators.
      </Typography>
      <br />
      <Typography>
The MB Core conducts seminars and workshops throughout the year to update recent advances. Please visit events page for the details.
      </Typography>
      <br />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Core</strong>
        </Typography>
        <Typography>&bull; <a href="/people/individual/Kousoulas">Konstantin Kousoulas, PhD, Project Lead</a></Typography>
        <Typography>
          &bull; <a href="/people/individual/Chouljenko">Vladamir Chouljenko, PhD, Co- Investigator</a>
        </Typography>
        <Typography>
          {' '}
          &bull; <a href="/people/individual/Rangasamy">Tirumalai Rangasamy, PhD, Co-Investigator</a>
        </Typography>
      </Grid>
      <br />
      <Grid>
        <Typography variant="subtitle1">
          <strong>Core Services</strong>
        </Typography>
        <Typography>
          &bull; RNAi vectors and CRISPR/Cas9 for gene silencing and knockout.
        </Typography>
        <Typography>
          &bull; Overexpression vectors for transgene expression.
        </Typography>
        <Typography>&bull; Site-directed mutagenesis.</Typography>
        <Typography>&bull; Gene and pathway reporter assays.</Typography>
        <Typography>
          &bull; Support for transfection using adenovirus and lentivirus
          vectors.
        </Typography>
        <Typography>&bull; Real-time PCR gene quantification.</Typography>
        <Typography>&bull; DNA microarray and RNAseq analyses</Typography>
        <Typography>
          &bull; Consultation on molecular biology aspects to the COBRE
          investigators and develop or adopt new techniques as needed.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default MolecularCore;
