import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { navigate } from '@reach/router';

export const Publications = props => {
  return (
    <Fragment>
      <Grid item xs={12}>
        <Typography variant="h5">Publications</Typography>
      </Grid>
      <Grid item xs={12} className="links">
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/33230225' target='_blank'>NLRP6 modulates neutrophil homeostasis in bacterial pneumonia-derived sepsis.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32983182' target='_blank'>Tristetraprolin Overexpression in Non-hematopoietic Cells Protects Against Acute Lung Injury in Mice.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32458502' target='_blank'>Glycyrrhetinic acid and its derivatives as potential alternative medicine to relieve symptoms in nonhospitalized COVID-19 patients.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32049330' target='_blank'>Tuning T helper cell differentiation by ITK.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/31988468' target='_blank'>The NLRP6 inflammasome in health and disease.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32038633' target='_blank'>Interleukin-2-Inducible T-Cell Kinase Deficiency Impairs Early Pulmonary Protection Against Mycobacterium tuberculosis Infection.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32817334' target='_blank'>The Innate Lymphoid System Is a Critical Player in the Manifestation of Mucoinflammatory Airway Disease in Mice.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32060135' target='_blank'>Ablation of IL-33 Suppresses Th2 Responses but Is Accompanied by Sustained Mucus Obstruction in the Scnn1b Transgenic Mouse Model.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32640487' target='_blank'>BTK/ITK dual inhibitors: Modulating immunopathology and lymphopenia for COVID-19 therapy.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32374457' target='_blank'>The anti-HIV drug nelfinavir mesylate (Viracept) is a potent inhibitor of cell fusion caused by the SARSCoV-2 spike (S) glycoprotein warranting further evaluation as an antiviral against COVID-19 infections.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/31836454' target='_blank'>Adeno-associated viral vector-mediated immune responses: Understanding barriers to gene delivery.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32545247' target='_blank'>The Tristetraprolin Family of RNA-Binding Proteins in Cancer: Progress and Future Prospects.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/31082431' target='_blank'>Non-receptor tyrosine kinase signaling in autoimmunity and therapeutic implications.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32759295' target='_blank'>TCR Signal Strength and Antigen Affinity Regulate CD8+ Memory T Cells.</a>
        </Typography>
        <Typography>
        <a href='https://www.ncbi.nlm.nih.gov/pubmed/32344058' target='_blank'>COVID-19 diagnostic process in mainland China: The math beyond pneumonia.</a>
        </Typography>
      </Grid>
    </Fragment>
  );
};

export default Publications;
