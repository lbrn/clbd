import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';


const MolecularCore = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Molecular Biology Core</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Core</strong>
        </Typography>
        <Typography>&bull; Konstantin Kousoulas, PhD, Project Lead</Typography>
        <Typography>
          &bull; Vladamir Chouljenko, PhD, Co- Investigator
        </Typography>
        <Typography>
          {' '}
          &bull; Tirumalai Rangasamy, PhD, Co-Investigator
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="subtitle1">
          <strong>Core Services</strong>
        </Typography>
        <Typography>
          &bull; RNAi vectors and CRISPR/Cas9 for gene silencing and knockout.
        </Typography>
        <Typography>
          &bull;Overexpression vectors for transgene expression.
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
