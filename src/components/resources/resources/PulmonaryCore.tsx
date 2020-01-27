import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

interface link {
  title: string;
  link: string;
}

const PulmoaryCore = props => {
  //   function titleCase(str: string) {
  //     var splitStr = str.toLowerCase().split(' ');
  //     for (var i = 0; i < splitStr.length; i++) {
  //       // You do not need to check if i is larger than splitStr length, as your for does that for you
  //       // Assign it back to the array
  //       splitStr[i] =
  //         splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  //     }
  //     // Directly return the joined string
  //     return splitStr.join(' ');
  //   }

  const createLinks = (links: link[]) => {
    return props.links.map(item => (
      <Link
        href="https://www.amazon.com"
        target="_blank"
        variant="body1"
        key={item.link}
      >
        {item.title}
      </Link>
    ));
  };
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Pulmonary Immunopathology Core </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1"><strong>Core</strong></Typography>
        <Typography>&bull; Tammy Dugas, PhD, Project Lead</Typography>
        <Typography>
          &bull; Ingeborg Langohr, DVM, PhD, DACVP, Co-Investigator
        </Typography>
        <Typography>
          &bull; Rebecca Christofferson, PhD, Co-Investigator
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1"><strong>Core Services</strong></Typography>
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

export default PulmoaryCore;
