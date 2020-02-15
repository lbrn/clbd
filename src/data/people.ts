import {
  Baines,
  Baumgarth,
  Bubeckwardenburg,
  Cardin,
  Christofferson,
  Cormier,
  Dugas,
  Fessler,
  Fontenot,
  GuerreroPlata,
  Huang,
  Irvin,
  Jeyaseelan,
  Kaushal,
  Kolls,
  Kousoulas,
  Langohr,
  Noel,
  Ogundele,
  Patial,
  Penn,
  Rangasamy,
  Reed,
  Saini,
  Stanton,
  Vladimir,
  White,
  Yoshimmura,
} from '../assets/people/index';
import person from '../models/person';

// mentees: [
// 	{
// 		name: 'Weishan Huang',
// 		abstract: 'Dr. Huang is an Assistant Professor of Immunology in the Department of Pathobiological Sciences at Louisiana State University, Baton Rouge. Her research focuses on the interactions among TCR, cytokine and metabolic signaling pathways that orchestrate the T cell immune homeostasis under static, lymphopenic and inflammatory conditions. Dr. Huang’s lab is particularly interested in the development and function of T helper cells and understanding the difference and similarity of memory T cells generated through different routes. The Huang lab has a history of funding from the National Institutes of Health. Dr. Huang obtained her BS in Biology and BE in Economics from Tsinghua University, Beijing, China and her PhD in Pharmacology from Cornell University. She was an AAI Postdoctoral Fellow in Immunology and then Assistant Research Professor of Immunology at Cornell University, prior to her appointment at LSU in 2018.',
// 		institution: 'Louisiana State University',
// 		image: Huang,
// 		link: 'https://bit.ly/2W8bggy',
// 		mentors: [
// {
// 	name: 'Stephanie Cormier',
// 	institution: 'Louisiana State University',
// 	image: Cormier,
// 	link: 'https://bit.ly/2MKBym0'

// },
// 			{
// 				name: 'Jay Kolls',
// 				institution: 'Tulane',
// 				image: Kolls,
// 				link: 'https://bit.ly/2Pf6ufB'
// 			}
// 		],
// 	},
// 	{
// 		name: 'Yogesh Saini',
// 		abstract: 'Dr. Saini is an Associate Professor in the Department of Comparative Biomedical Sciences at Louisiana State University, Baton Rouge. Dr. Saini received his DVM from College of Veterinary Sciences, Palampur (India) and MVetS in Veterinary Biochemistry and Biotechnology from College of Veterinary Sciences, Pantnager (India). He completed his Senior Research Fellowship at Indian Veterinary Research Institute, Izatnagar (India). He received his dual-PhD (Genetics and Toxicology) under the supervision of Dr. John LaPres at Michigan State University in 2009. After completing his postdoctoral training (2010-2014) in the laboratory of Dr. Richard Boucher at the University of North Carolina (UNC), he was appointed as a faculty member at Marsico Lung Institute. The focus of his current research is to understand multiple aspects of lung biology and inflammatory lung diseases. The ongoing research employs murine models of pathogens- and toxicant-induced inflammation. The ultimate goal of this research is to develop diagnostic biomarker of lung diseases and therapeutic interventions to modulate inflammatory responses',
// 		institution: 'Louisiana State University',
// 		image: Saini,
// 		link: 'https://bit.ly/2pV5Nxl',
// 		mentors: [
// 			{
// 				name: 'Rhonda Cardin',
// 				institution: 'Louisiana State University',
// 				image: Cardin,
// 				link: 'https://bit.ly/2BHpDPm',

// 			},
// 			{
// 				name: 'Deepak Kaushal',
// 				institution: 'Texas Biomedical Research Institute',
// 				image: Kaushal,
// 				link: 'https://bit.ly/345In7z',
// 			}
// 		]
// 	},
// 	{
// 		name: 'Sonika Patial',
// 		abstract: 'Dr. Patial is an Assistant Professor in the Department of Comparative Biomedical Sciences at Louisiana State University, Baton Rouge. The focus of her current research is to investigate the role of tristetraprolin (TTP) family of RNA binding protein mediated post-transcriptional regulation of gene expression in health and disease. Post-transcriptional control is crucial in regulating the magnitude and duration of inflammatory responses. More specifically, Dr. Patial is investigating how post-transcriptional regulation of inflammatory gene expression modulates the pathogenesis of lung and liver disease. The long term goal of this research is to identify diagnostic biomarkers and novel therapeutic targets for lung and liver diseases. Dr. Patial received her DVM from the College of Veterinary Sciences, Palampur (India) and MVSc in Animal Biotechnology from Indian Veterinary Research Institute, Izatnagar (India). She received her PhD from Michigan State University in 2010 following which she completed a postdoctoral training (2011-2016) in the laboratory of Dr. Perry Blackshear at The National Institute of Environmental Health Sciences, North Carolina. Dr. Patial is also a Diplomate of the American College of Veterinary Pathologists (ACVP).',
// 		institution: 'Louisiana State University',
// 		image: Patial,
// 		link: 'https://bit.ly/32IFYza',
// 		mentors: [
// 			{
// 				name: 'Jacqueline Stephens',
// 				link: 'https://www.lsu.edu/science/biosci/faculty_and_staff/stephens.php',

// 			},
// 			{
// 				name: 'James McLachlan',
// 				link: ''
// 			}
// 		]
// 	},
// 	{
// 		name: 'Alexandra Noel',
// 		abstract: 'Dr. Alexandra Noël is an Assistant Professor in the Department of Comparative Biomedical Sciences, School of Veterinary Medicine, at Louisiana State University. Dr. Noël obtained her BSc. in Biomedical Sciences, her MSc. in Occupational and Environmental Health, and her PhD in Public Health with a specialization in Toxicology and Risk Assessment, all from the University of Montreal (QC, Canada). She is an inhalation toxicologist with over ten years of experience in inhalation and lung biology. Her research focuses on the pulmonary effects induced by inhaled nanomaterials (< 100 nm) and tobacco products. She also conducts developmental toxicology studies on pulmonary effects of in utero and adult exposures to nanoparticles, cigarette second-hand smoke, electronic-cigarette and JUUL aerosols, as well as ultrafine combustion-derived particles. The overarching objectives and goals of her research program are to improve public health by providing in vitro and in vivo scientific evidence related to the health effects induced by environmental exposures. More specifically, her research seeks to investigate the fundamental mechanism at the epigenetic, molecular and cellular levels that underlie the developmental origins of health and disease, with respect to respiratory effects caused by distinct emerging inhaled environmental pollutants. Dr. Noël’s lab is currently funded, among others, by the National Institutes of Health and the Louisiana Board of Regents. In addition, Dr. Noël’s was the chair of the 2017 Gordon Research Seminar (GRS) on Lung Development Injury & Repair; she currently serves on the American Thoracic Society (ATS) Membership Committee (2018-2020); and she is the 2019-2020 Vice-President (Elect) of the Society of Toxicology (SOT) South-Central Chapter. ',
// 		institution: 'Louisiana State University',
// 		image: Noel,
// 		link: 'https://bit.ly/2pP5Jzh',
// 		mentors: [
// 			{
// 				name: 'Tammy Dugas',
// 				institution: 'Louisiana State University',
// 				image: Dugas,
// 				link: 'https://bit.ly/33YO5Ic'

// 			},
// 			{
// 				name: 'Arthur Penn',
// 				institution: 'Louisiana State University',
// 				image: Penn,
// 				link: 'https://bit.ly/33cgv0F'
// 			},
// 		]
// 	},
// ],

interface peopleGroup {
  displayName: string;
  members: person[];
}

interface people {
  [key: string]: peopleGroup;
}

export const people: people = {
  leadership: {
    displayName: 'Leadership',
    members: [
      {
        name: 'Samithamby Jeyaseelan',
        institution: 'Louisiana State University',
        degree: 'DVM, PhD',
        image: Jeyaseelan,
        title:
          'William L. Jenkins Professor in the Department of Pathobiological Sciences',
        role: 'Principal investigator',
        link: 'https://bit.ly/31Giidr ',
      },
      {
        name: 'Rhonda Cardin',
        institution: 'Louisiana State University',
        degree: 'PhD',
        image: Cardin,
        title: 'Associate dean for research and advanced studies',
        role: 'Co-investigator',
        link: 'http://facultypages.vetmed.lsu.edu/faculty/rcardin',
      },
      {
        name: 'Whitney Fontenot',
        institution: 'Louisiana State University',
        degree: 'BS',
        title: 'Coordinator',
        role: 'Pathobiological Sciences',
        link: '',
        image: Fontenot,
      },
      {
        name: 'Alexis White',
        image: White,
        degree: 'BA',
        link: 'https://lbrn.lsu.edu/people.html',
        role: 'Account Specialist',
      },
    ],
  },
  externalAdvisoryCommittee: {
    displayName: 'External Advisory Committee',
    members: [
      {
        name: 'Charles Irvin',
        image: Irvin,
        role: 'External Advisory Committee',
        degree: 'PhD',
        institution: 'University of Vermont.',
        link: 'https://bit.ly/2NgIOVQ',
      },
      {
        name: 'Bruce Stanton',
        image: Stanton,
        degree: 'PhD',
        role: 'External Advisory Committee',
        institution: 'Dartmouth College.',
        link: 'https://bit.ly/2pRtnuU',
      },
      {
        name: 'Michael Fessler',
        image: Fessler,
        degree: 'MD',
        role: 'External Advisory Committee',
        institution: 'National Institute of Environmental Health Sciences.',
        link: 'https://bit.ly/32M5pzM',
      },
      {
        name: 'Juliane Bubeckwardenburg',
        image: Bubeckwardenburg,
        degree: 'MD, PhD',
        role: 'External Advisory Committee',
        institution: 'Washington University in St.Louis.',
        link: 'https://bit.ly/32KDq3x',
      },
      {
        name: 'Nicole Baumgarth',
        image: Baumgarth,
        degree: 'DVM, PhD',
        role: 'External Advisory Committee',
        institution: 'University of California, Davis.',
        link: 'https://bit.ly/32McZdM',
      },
    ],
  },
  internalAdvisoryCommittee: {
    displayName: 'Internal Advisory Committee',
    members: [
      {
        name: 'Joel Baines',
        institution: 'Louisiana State University',
        degree: 'VMD, PhD',
        role: 'Kenneth F. Burns, Chair Dean, School of Veterinary Medicine',
        image: Baines,
        link: 'https://bit.ly/2Wa5b3f',
      },
      {
        name: 'Deepak Kaushal',
        degree: 'PhD',
        institution: 'Texas Biomedical Research Institute',
        role: 'Professor and Director',
        image: Kaushal,
        link: 'https://bit.ly/2W9mLnZ',
      },
      {
        name: 'Konstantin Kousoulas',
        institution: 'Louisiana State University',
        degree: 'PhD',
        role: 'Professor and Head, Pathobiological Sciences',
        image: Kousoulas,
        link: 'https://bit.ly/2PhLrt6',
      },
      {
        name: 'Stephania Cormier',
        degree: 'PhD',
        institution: 'Louisiana State University',
        role: 'Professor and Associate Vice President for Research',
        image: Cormier,
        link: 'https://bit.ly/2PrEN3B',
      },
      {
        name: 'Jay Kolls',
        degree: 'MD',
        institution: 'Tulane University',
        role:
          'Professor of Medicare and Pediatrics, John W Deming Endowed Chair',
        image: Kolls,
        link: 'https://bit.ly/2pLRUBQ',
      },
      {
        name: 'Kevin Reed',
        degree: 'MD',
        role:
          'Associate Professor of Medicine, Associate Dean of Academic Affairs in Baton Rouge',
        institution: 'LSU Health Sciences Center, Baton Rouge',
        link: 'https://marybird.org/doctor/reed/',
        image: Reed,
      },
    ],
  },
  pulmonaryImmunopathologyCore: {
    displayName: 'Pulmonary Immunopathology Core',
    members: [
      {
        name: 'Tammy Dugas',
        degree: 'PhD',
        institution: 'Louisiana State University',
        role: 'Core Lead',
        image: Dugas,
        link: 'https://bit.ly/33YO5Ic',
      },
      {
        name: 'Ingeborg Langohr',
        degree: 'DVM, PhD',
        role: 'Co-investigator',
        institution: 'Louisiana State University',
        image: Langohr,
        link: 'http://facultypages.vetmed.lsu.edu/faculty/ilangohr',
      },
      {
        name: 'Rebecca Christofferson',
        degree: 'PhD',
        institution: 'Louisiana State University',
        role: 'Co-investigator',
        image: Christofferson,
        link: 'http://facultypages.vetmed.lsu.edu/faculty/rcarri1',
      },
    ],
  },
  molecularBiologyCore: {
    displayName: 'Molecular Biology Core',
    members: [
      {
        name: 'Konstantin Kousoulas',
        degree: 'PhD',
        institution: 'Louisiana State University',
        role: 'Core Lead',
        image: Kousoulas,
        link: 'https://bit.ly/2PhLrt6',
      },
      {
        name: 'Tirumalai Rangasamy',
        degree: 'PhD',
        abstract:
          'Dr. Rangasamy is an Assistant Professor (Research) in the Department of Pathobiological and Center for Lung Biology and Disease at Louisiana State University, Baton Rouge. Dr. Rangasamy received his BSc, MSc, and PhD degrees from the University of Madras (India). He did his postdoctoral trainings at the Indian Institute of Science (Bangalore, India), Pierre et Marie Curie University (Paris, France), and Johns Hopkins University (Baltimore), and then worked as an Assistant Research Professor at the University of Rochester Medical Center, prior to his appointment at LSU in 2015. The overall goal of Dr. Rangasamy’s  research program is to identify the genetic mechanisms of susceptibility to oxidative stress related lung diseases such as cigarette smoke (CS)–mediated chronic obstructive pulmonary disease (COPD), allergic asthma, bacterial pneumonia and septic shock. Our long term objectives are 1) to identify the host factors that determine the susceptibility to CS-induced COPD, allergic airway inflammation,  bacterial pneumonia, and acute lung injury and septic shock, using genetic, genomic, and proteomic methods which are especially valuable in the study of complex disease conditions, 2) to identify and characterize specific molecular pathways that are associated with COPD and asthma, 3) to investigate the role of the major anti-oxidative transcription factor Nrf2 in dendritic cell activation, T cell differentiation, and in stem cell differentiation, and 4) to develop small molecule/stem cell based therapeutic interventions in oxidative stress related lung diseases. Dr. Rangasamy has extensive expertise in mouse models of inflammatory lung diseases including CS-induced pulmonary emphysema, allergic asthma, bacterial pneumonia and endotoxin/cecal ligation and puncture mediated acute lung injury and septic shock; computer assisted lung morphometric measurements, measurement of lung elastance and resistance in asthmatic mice, isolation and characterization of mesenchymal stem cells from the lung and bone marrows, generation of myeloid dendritic cells/macrophages/neutrophils from bone marrows, differentiation of Th1/Th2/FOX P3 regulatory T cells, bacterial culture, extracellular and intracellular (opsonophagocytosis) bacterial killing assays, gene expression arrays (Affymetrix), expression (in E. coli) and purification (using FPLC) of recombinant proteins, development of contraceptive vaccine (mice rats and rabbits), epitope mapping, flow cyotometry, as well as in various immunological and molecular techniques. Dr. Rangasamy is currently working with Prof. Samithamby Jeyaseelan (Director, Center For Lung Biology and Disease). Dr. Rangasamy is investigating the therapeutic potential of prospectively purified lung mesenchymal stem cells in COPD (emphysema)-associated bacterial exacerbations, as well as in various infectious lung diseases including pneumonia caused by Klebsiella pneumoniae, Streptococcus pneumoniae (Pneumococcal pneumonia), and superbugs [methicillin resistant Staphylococcus aureus (MRSA), and carbapenem resistant Klebsiella pneumoniae] using pre-clinical mouse models.',
        institution: 'Louisiana State University',
        role: 'Co-Investigator',
        image: Rangasamy,
        link: 'https://www.linkedin.com/in/tirumalai-rangasamy-667b773/',
      },

      {
        name: 'Vladimir Chouljenko',
        degree: 'PhD',
        institution: 'Louisiana State University',
        role: 'Co-Investigator',
        image: Vladimir,
        link: 'http://facultypages.vetmed.lsu.edu/faculty/vchoul1',
      },
    ],
  },
  projectInvestigators: {
    displayName: 'Project Investigators',
    members: [
      {
        name: 'Sonika Patial',
        abstract:
          'Dr. Patial is an Assistant Professor in the Department of Comparative Biomedical Sciences at Louisiana State University, Baton Rouge. The focus of her current research is to investigate the role of tristetraprolin (TTP) family of RNA binding protein mediated post-transcriptional regulation of gene expression in health and disease. Post-transcriptional control is crucial in regulating the magnitude and duration of inflammatory responses. More specifically, Dr. Patial is investigating how post-transcriptional regulation of inflammatory gene expression modulates the pathogenesis of lung and liver disease. The long term goal of this research is to identify diagnostic biomarkers and novel therapeutic targets for lung and liver diseases. Dr. Patial received her DVM from the College of Veterinary Sciences, Palampur (India) and MVSc in Animal Biotechnology from Indian Veterinary Research Institute, Izatnagar (India). She received her PhD from Michigan State University in 2010 following which she completed a postdoctoral training (2011-2016) in the laboratory of Dr. Perry Blackshear at The National Institute of Environmental Health Sciences, North Carolina. Dr. Patial is also a Diplomate of the American College of Veterinary Pathologists (ACVP).',
        institution: 'Louisiana State University',
        image: Patial,
        role: 'Project Investigator',
        link: 'https://bit.ly/32IFYza',
        mentors: [
          {
            name: 'Jacqueline Stephens',
            link:
              'https://www.lsu.edu/science/biosci/faculty_and_staff/stephens.php',
          },
          {
            name: 'James McLachlan',
            link:
              'https://medicine.tulane.edu/departments/microbiology-immunology/faculty/james-mclachlan-phd',
          },
        ],
      },
      {
        name: 'Yogesh Saini',
        abstract:
          'Dr. Saini is an Associate Professor in the Department of Comparative Biomedical Sciences at Louisiana State University, Baton Rouge. Dr. Saini received his DVM from College of Veterinary Sciences, Palampur (India) and MVetS in Veterinary Biochemistry and Biotechnology from College of Veterinary Sciences, Pantnager (India). He completed his Senior Research Fellowship at Indian Veterinary Research Institute, Izatnagar (India). He received his dual-PhD (Genetics and Toxicology) under the supervision of Dr. John LaPres at Michigan State University in 2009. After completing his postdoctoral training (2010-2014) in the laboratory of Dr. Richard Boucher at the University of North Carolina (UNC), he was appointed as a faculty member at Marsico Lung Institute. The focus of his current research is to understand multiple aspects of lung biology and inflammatory lung diseases. The ongoing research employs murine models of pathogens- and toxicant-induced inflammation. The ultimate goal of this research is to develop diagnostic biomarker of lung diseases and therapeutic interventions to modulate inflammatory responses',
        institution: 'Louisiana State University',
        image: Saini,
        role: 'Project Investigator',
        link: 'https://bit.ly/2pV5Nxl',
        mentors: [
          {
            name: 'Rhonda Cardin',
            link: 'http://facultypages.vetmed.lsu.edu/faculty/rcardin',
          },
          { name: 'Deepak Kaushal', link: 'https://bit.ly/345In7z' },
        ],
      },
      {
        name: 'Weishan Huang',
        abstract:
          'Dr. Huang is an Assistant Professor of Immunology in the Department of Pathobiological Sciences at Louisiana State University, Baton Rouge. Her research focuses on the interactions among TCR, cytokine and metabolic signaling pathways that orchestrate the T cell immune homeostasis under static, lymphopenic and inflammatory conditions. Dr. Huang’s lab is particularly interested in the development and function of T helper cells and understanding the difference and similarity of memory T cells generated through different routes. The Huang lab has a history of funding from the National Institutes of Health. Dr. Huang obtained her BS in Biology and BE in Economics from Tsinghua University, Beijing, China and her PhD in Pharmacology from Cornell University. She was an AAI Postdoctoral Fellow in Immunology and then Assistant Research Professor of Immunology at Cornell University, prior to her appointment at LSU in 2018.',
        institution: 'Louisiana State University',
        image: Huang,
        role: 'Project Investigator',
        link: 'https://bit.ly/2W8bggy',
        mentors: [
          { name: 'Stephanie Cormier', link: 'https://bit.ly/2MKBym0' },
          { name: 'Jay Kolls', link: 'https://bit.ly/2Pf6ufB' },
        ],
      },
      {
        name: 'Alexandra Noel',
        abstract:
          'Dr. Alexandra Noël is an Assistant Professor in the Department of Comparative Biomedical Sciences, School of Veterinary Medicine, at Louisiana State University. Dr. Noël obtained her BSc. in Biomedical Sciences, her MSc. in Occupational and Environmental Health, and her PhD in Public Health with a specialization in Toxicology and Risk Assessment, all from the University of Montreal (QC, Canada). She is an inhalation toxicologist with over ten years of experience in inhalation and lung biology. Her research focuses on the pulmonary effects induced by inhaled nanomaterials (< 100 nm) and tobacco products. She also conducts developmental toxicology studies on pulmonary effects of in utero and adult exposures to nanoparticles, cigarette second-hand smoke, electronic-cigarette and JUUL aerosols, as well as ultrafine combustion-derived particles. The overarching objectives and goals of her research program are to improve public health by providing in vitro and in vivo scientific evidence related to the health effects induced by environmental exposures. More specifically, her research seeks to investigate the fundamental mechanism at the epigenetic, molecular and cellular levels that underlie the developmental origins of health and disease, with respect to respiratory effects caused by distinct emerging inhaled environmental pollutants. Dr. Noël’s lab is currently funded, among others, by the National Institutes of Health and the Louisiana Board of Regents. In addition, Dr. Noël’s was the chair of the 2017 Gordon Research Seminar (GRS) on Lung Development Injury & Repair; she currently serves on the American Thoracic Society (ATS) Membership Committee (2018-2020); and she is the 2019-2020 Vice-President (Elect) of the Society of Toxicology (SOT) South-Central Chapter. ',
        institution: 'Louisiana State University',
        image: Noel,
        role: 'Project Investigator',
        link: 'https://bit.ly/2pP5Jzh',
        mentors: [
          { name: 'Tammy Dugas', link: 'https://bit.ly/33YO5Ic' },
          {
            name: 'Arthur Penn',
            link: 'http://facultypages.vetmed.lsu.edu/faculty/apenn1',
          },
        ],
      },
    ],
  },
  pilotInvestigators: {
    displayName: 'Pilot Investigators',
    members: [
      {
        name: 'Masami Yoshimmura',
        institution: 'Louisiana State University',
        role: 'Pilot Investigator',
        image: Yoshimmura,
        link: 'https://bit.ly/362gvmr',
      },
      {
        name: 'Antonieta Guerrero-Plata',
        abstract:
          'Dr. Guerrero-Plata is an Associate Professor in Immunology in the Department of Pathobiological Sciences at Louisiana State University. She is a licensed clinical chemist from the Universidad Autonoma de Tamaulipas and received an MSc and Ph.D. degrees from the Universidad Nacional Autonoma de Mexico (UNAM), with additional graduate training at Imperial College London. Dr. Guerrero-Plata completed her postdoctoral training at UTMB before her appointments as Instructor and Assistant Professor at the same institution. She joined the department of PBS at LSU to establish her research program focused on innate immunity and respiratory viruses, including the study of the molecular mechanisms responsible for the activation and subversion of the immune response to human pneumovirus infections.',
        institution: 'Louisiana State University',
        role: 'Pilot Investigator',
        image: GuerreroPlata,
        link: 'https://bit.ly/31K0pL1',
      },
      {
        name: 'Olalekan Ogundele',
        abstract:
          'Dr. Olalekan Ogundele is an Assistant Professor in the Department of Comparative Biomedical Sciences, LSU School of Veterinary Medicine, Baton Rouge. Dr. Ogundele’s lab study neural mechanisms that underlie behavior and systemic function. His research is focused on developing novel tools for probing neural circuits in rodent experimental models in vivo. Methods used in his lab include cre-lox targeting of neuron sub-populations, optogenetic modulation, neural circuit tracing, in vivo recording from brain areas of anesthetized and awake mice. Currently, Dr. Ogundele’s lab is using these methods to elucidate firing rate homoeostasis of pre-BötC area rhythmogenic neurons in a mouse model of endotoxemia. Dr. Ogundele obtained his Bachelors and Doctorate degree from the University of Ilorin, Nigeria. He was an IBRO-ISN postdoctoral fellow with the Neural Systems Laboratory (LSU), before his appointment as Assistant Professor in 2017.',
        institution: 'Louisiana State University',
        role: 'Pilot Investigator',
        image: Ogundele,
        link: 'https://bit.ly/2pdpKzv',
      },
      {
        name: 'Tirumalai Rangasamy',
        abstract:
          'Dr. Rangasamy is an Assistant Professor (Research) in the Department of Pathobiological and Center for Lung Biology and Disease at Louisiana State University, Baton Rouge. Dr. Rangasamy received his BSc, MSc, and PhD degrees from the University of Madras (India). He did his postdoctoral trainings at the Indian Institute of Science (Bangalore, India), Pierre et Marie Curie University (Paris, France), and Johns Hopkins University (Baltimore), and then worked as an Assistant Research Professor at the University of Rochester Medical Center, prior to his appointment at LSU in 2015. The overall goal of Dr. Rangasamy’s  research program is to identify the genetic mechanisms of susceptibility to oxidative stress related lung diseases such as cigarette smoke (CS)–mediated chronic obstructive pulmonary disease (COPD), allergic asthma, bacterial pneumonia and septic shock. Our long term objectives are 1) to identify the host factors that determine the susceptibility to CS-induced COPD, allergic airway inflammation,  bacterial pneumonia, and acute lung injury and septic shock, using genetic, genomic, and proteomic methods which are especially valuable in the study of complex disease conditions, 2) to identify and characterize specific molecular pathways that are associated with COPD and asthma, 3) to investigate the role of the major anti-oxidative transcription factor Nrf2 in dendritic cell activation, T cell differentiation, and in stem cell differentiation, and 4) to develop small molecule/stem cell based therapeutic interventions in oxidative stress related lung diseases. Dr. Rangasamy has extensive expertise in mouse models of inflammatory lung diseases including CS-induced pulmonary emphysema, allergic asthma, bacterial pneumonia and endotoxin/cecal ligation and puncture mediated acute lung injury and septic shock; computer assisted lung morphometric measurements, measurement of lung elastance and resistance in asthmatic mice, isolation and characterization of mesenchymal stem cells from the lung and bone marrows, generation of myeloid dendritic cells/macrophages/neutrophils from bone marrows, differentiation of Th1/Th2/FOX P3 regulatory T cells, bacterial culture, extracellular and intracellular (opsonophagocytosis) bacterial killing assays, gene expression arrays (Affymetrix), expression (in E. coli) and purification (using FPLC) of recombinant proteins, development of contraceptive vaccine (mice rats and rabbits), epitope mapping, flow cyotometry, as well as in various immunological and molecular techniques. Dr. Rangasamy is currently working with Prof. Samithamby Jeyaseelan (Director, Center For Lung Biology and Disease). Dr. Rangasamy is investigating the therapeutic potential of prospectively purified lung mesenchymal stem cells in COPD (emphysema)-associated bacterial exacerbations, as well as in various infectious lung diseases including pneumonia caused by Klebsiella pneumoniae, Streptococcus pneumoniae (Pneumococcal pneumonia), and superbugs [methicillin resistant Staphylococcus aureus (MRSA), and carbapenem resistant Klebsiella pneumoniae] using pre-clinical mouse models.',
        institution: 'Louisiana State University',
        role: 'Pilot Investigator',
        image: Rangasamy,
        link: 'https://www.linkedin.com/in/tirumalai-rangasamy-667b773/',
      },
    ],
    // {
    //   name: 'Stephanie Cormier',
    //   institution: 'Louisiana State University',
    //   image: Cormier,
    //   link: 'https://bit.ly/2MKBym0',
    // },
    // {
    //   name: 'Jay Kolls',
    //   institution: 'Tulane',
    //   image: Kolls,
    //   link: 'https://bit.ly/2Pf6ufB',
    // },
    // {
    //   name: 'Deepak Kaushal',
    //   institution: 'Texas Biomedical Research Institute',
    //   image: Kaushal,
    //   link: 'https://bit.ly/345In7z',
    // },
    // {
    //   name: 'Jacqueline Stephens',
    //   link: '',
    // },
    // {
    //   name: 'James McLachlan',
    //   link: '',
    // },
    // {
    //   name: 'Tammy Dugas',
    //   institution: 'Louisiana State University',
    //   image: Dugas,
    //   link: 'https://bit.ly/33YO5Ic',
    // },
    // {
    //   name: 'Arthur Penn',
    //   institution: 'Louisiana State University',
    //   image: Penn,
    //   link: 'https://bit.ly/33cgv0F',
    // },
  },
};
