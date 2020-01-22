import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';

interface link {
  title: string;
  link: string;
}

const molecularCore = props => {
  // function titleCase(str: string) {
  //   var splitStr = str.toLowerCase().split(' ');
  //   for (var i = 0; i < splitStr.length; i++) {
  //     // You do not need to check if i is larger than splitStr length, as your for does that for you
  //     // Assign it back to the array
  //     splitStr[i] =
  //       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  //   }
  //   // Directly return the joined string
  //   return splitStr.join(' ');
  // }

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
        <Typography variant="h5">Molecular Core</Typography>
      </Grid>
      <Grid item xs={12}>
        {/* {createLinks(props.links)} */}
        <Typography variant="subtitle2">Staff</Typography>
        <Typography>
          1. Konstantin Kousoulas, PhD, Project Lead 2. Vladamir Chouljenko,
          PhD, Co- Investigator 3. Tirumalai Rangasamy, PhD, Co-Investigator
        </Typography>
        <Typography variant="subtitle2">Core Services</Typography>
        <Typography>
          1. RNAi vectors and CRISPR/Cas9 for gene silencing and knockout. 2.
          Overexpression vectors for transgene expression. 3. Site-directed
          mutagenesis. 4. Gene and pathway reporter assays. 5. Support for
          transfection using adenovirus and lentivirus vectors. 6. Real-time PCR
          gene quantification. 7. DNA microarray and RNAseq analyses 8.
          Consultation on molecular biology aspects to the COBRE investigators
          and develop or adopt new techniques as needed.
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default molecularCore;
