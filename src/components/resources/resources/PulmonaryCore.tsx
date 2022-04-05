import React, { Fragment } from 'react';
import { Grid, Typography } from '@material-ui/core';

const PulmonaryCore = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Pulmonary Immunopathology Core </Typography>
        <br />
        <Typography>The Pulmonary Immunopathology (PIP) Core is housed at the School of Veterinary Medicine which is a core facility providing a broad range of pulmonary immunology and technical expertise to researchers in the state of Louisiana. The core characterizes inflammatory responses in the lung and extrapulmonary organs before, during and after infectious and non-infectious inflammation. Furthermore, the core provides support for statistical analysis.
        </Typography>
        <br />
        <Typography>
        The core provides hands-on training to investigators and their lab members. If you would like to talk about your training needs or obtain more information about services provided by the PIP Core, please contact the Project Lead or Co-Investigators.
        </Typography>
        <br />
        <Typography>
The PIP Core conducts workshops and seminars throughout the year to update recent advances in technology improvement. Please visit events page for the details.
		</Typography>
		<br />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Core</strong>
        </Typography>
        <Typography>&bull; <a href="/people/individual/Saini">Yogesi Saini, PhD, Project Lead</a></Typography>
        <Typography>&bull; <a href="/people/individual/Jeansonne">Duane Jeansonne, PhD, Core coordinator.</a></Typography>
        <Typography>
          &bull; <a href="/people/individual/Langhor">Ingeborg Langohr, DVM, PhD, DACVP, Co-Investigator</a>
        </Typography>
        <Typography>
          &bull; <a href="/people/individual/Wen">Xue Wen, PhD, Co-Investigator</a>
        </Typography>
      </Grid>
      <br />
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          <strong>Core Services</strong>
        </Typography>
        <Typography>
          &bull; Mouse colony management and breeding strategies for maintaining
          colonies.
        </Typography>
        <Typography>&bull; Genotyping of mouse tail DNA via PCR.</Typography>
        <Typography>
          &bull; Intranasal/intratracheal infection of mice.
        </Typography>
        <Typography>&bull; Post-infection monitoring of mice.</Typography>
        <Typography>
          &bull; Pulmonary function tests, such as Flexivent
        </Typography>
        <Typography>
          &bull; Mouse dissections and tissue collections.
        </Typography>
        <Typography>
          &bull; Bronchioalveolar lavage fluid (BAL) collection.
        </Typography>
        <Typography>
          &bull; Intratracheal instillation of reagents, such as LPS, bacteria,
          antibodies, compounds.
        </Typography>
        <Typography>
          &bull; Support for evaluations using confocal microscopy and
          interpretation of images obtained by scanning and transmission
          electron microscopy.
        </Typography>
        <Typography>
          &bull; Support for experimental design related to pathology sampling
        </Typography>
        <Typography>
          &bull; Tissue processing for paraffin-embedded tissue sections and
          stains.
        </Typography>
        <Typography>
          &bull; Immunofluorescence and immunohistochemistry tissue staining.
        </Typography>
        <Typography>
          &bull; Histological scoring of lungs and extrapulmonary tissues.
        </Typography>
        <Typography> &bull; Support for Flow cytometry and sorter. </Typography>
        <Typography>
          &bull; Support for standard tests of immune function including tests
          of cell mediated immunity (intracellular cytokine staining utilizing
          flow cytometry), in vitro assays, cytokine gene expression, or
          cytokine proteins via ELISA.
        </Typography>
        <Typography>
          &bull; Support for statistical analysis (parametric and
          non-parametric).
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default PulmonaryCore;
