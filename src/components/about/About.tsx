import React from 'react';
import { Typography, Grid, Container, makeStyles } from '@material-ui/core';

import { theme } from '../../theme/theme';
import about_image from '../../assets/misc/about_image.jpg';

const useStyles = makeStyles({
  title: {
    marginTop: theme.spacing(3),
  },
  imageWrap: {
    float: 'left',
    width: 200,
    height: 200,
    borderRadius: '50%',
    marginRight: theme.spacing(3),
    backgroundImage: `url(${about_image})`,
    backgroundPosition: 'center',
  },
  bodyText: {
    textIndent: '2em',
    // lineHeight: '2em'
  },
});

const About = ({ path }) => {
  const classes = useStyles({});
  return (
    <Container className={classes.title} maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography align="center" color="primary" variant="h4">
            Message from the Directors
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.bodyText} variant="body1">
            Welcome to the Louisiana Center for Lung Biology and Disease (CLBD)
            website. The Center was established in 2019 through an 11.6 million
            dollar grant from the National Institutes of Health-funded Centers
            of Biomedical Research Excellence (COBRE). The interdisciplinary
            faculty of the CLBD come from the Departments of Pathobiological
            Sciences and Comparative Biomedical Sciences at the School of
            Veterinary Medicine.
          </Typography>{' '}
          <br />
          <Typography className={classes.bodyText} variant="body1">
            The Center is committed to excellence in research and mentoring
            related to lung diseases. It is highly interactive, and consists of
            a dynamic group of junior investigators whose research focus is on
            understanding the molecular and cellular immunological mechanisms
            associated with the pathogenesis of infectious and non-infectious
            lung diseases using molecular, immunological, and pathological
            approaches in mouse models. They also use human samples to validate
            their findings from preclinical models.
          </Typography>{' '}
          <br />
          <Typography className={classes.bodyText} variant="body1">
            The research projects are supported by two scientific cores, the
            Pulmonary Immunopathology (PIP) Core and the Molecular Biology (MB)
            Core. The Administrative Core (AC) will coordinate the activities of
            the individual projects and cores, and includes a panel of mentors
            with outstanding experience in lung disease research.
          </Typography>{' '}
          <br />
          <Typography className={classes.bodyText} variant="body1">
            The Center has assembled senior scientists with outstanding track
            records to serve on the Internal Scientific and Advisory Committee
            (ISAC) and Mentoring Committee (MC) that carefully evaluate the
            scientific needs of each junior investigator and tailor the
            mentoring plan based on the individual’s need. Senior scientists
            with exceptional track records are included in the external advisory
            board (EAB).
          </Typography>{' '}
          <br />
          <Typography className={classes.bodyText} variant="body1">
            The long-term goal is to establish a collaborative, productive,
            sustainable, and nationally/internationally recognized Center of
            Excellence (COE) in Pulmonary Disease research. The Center will
            provide novel insights into the pathogenesis of devastating lung
            diseases that guide future improved strategies for treating and
            preventing these and other lung diseases in the human population.
          </Typography>
          <br />
          <Typography className={classes.bodyText} variant="body1">Please feel free to contact the center if you have any questions or want to learn more. <a href="mailto:clbd@lsu.edu?subject=CLBD%20Question">CLBD Contact</a>
          </Typography>
          <br />
          <Typography className={classes.bodyText} variant="body1">
          Thank you,
          </Typography>
           <br />
          <Typography className={classes.bodyText} variant="body1">
            <strong>Samithamby "Jey" Jeyaseelan, DVM, PhD</strong>
             </Typography>
             <Typography className={classes.bodyText} variant="body1">
             <strong>Tammy Dugas, PhD, Professor and Head, Comparative Biomedical Sciences, School of Veterinary Medicine, Louisiana State University.</strong>
             </Typography>
            <Typography className={classes.bodyText} variant="body1">
            Dr. William L. Jenkins Endowed Professor in Veterinary Medicine
            </Typography>
            <Typography className={classes.bodyText} variant="body1">
            Director, Center for Lung Biology and Disease (CLBD)
             </Typography>
            <Typography className={classes.bodyText} variant="body1">
            Professor of Immunology, Inflammation and Infectious Diseases, Department of Pathobiological Sciences
            </Typography>
            <Typography className={classes.bodyText} variant="body1">
            School of Veterinary Medicine
             </Typography>
            <Typography className={classes.bodyText} variant="body1">
            Louisiana State University
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
