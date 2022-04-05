import {
  Baines,
  Balasuriya,
  Baumgarth,
  Bubeckwardenburg,
  Cardin,
  Christofferson,
  Cormier,
  Dugas,
  Fessler,
  GuerreroPlata,
  Huang,
  Irvin,
  Jeyaseelan,
  Kaushal,
  Kolls,
  Kousoulas,
  Langohr,
  Le,
  Noel,
  Ogundele,
  Patial,
  Rangasamy,
  Reed,
  Saini,
  Stanton,
  Vladimir,
  White,
  Yoshimmura,
  Jeansonne,
  Fu,
} from '../assets/people/index';
import person from '../types/person';

interface peopleData {
  [name: string]: person;
}

export const peopleData: peopleData = {
  Jeyaseelan: {
    code: 'Jeyaseelan',
    id: 0,
    name: 'Samithamby Jeyaseelan',
    isActive: true,
    institution: 'Louisiana State University',
    degree: 'DVM, PhD',
    image: Jeyaseelan,
    title:
      'William L. Jenkins Professor in the Department of Pathobiological Sciences',
    role: 'Co-Director',
    link: 'https://bit.ly/31Giidr ',
  },
  Cardin: {
    code: 'Cardin',
    id: 1,
    name: 'Rhonda Cardin',
    isActive: true,
    institution: 'Louisiana State University',
    degree: 'PhD',
    image: Cardin,
    title: 'Associate dean for research and advanced studies',
    role: 'Co-investigator',
    link: 'http://facultypages.vetmed.lsu.edu/faculty/rcardin',
  },
  Le: {
    code: 'Le',
    id: 2,
    name: 'John Le',
    isActive: true,
    title: 'Interim Coordinator',
    role: 'Pathobiological Sciences',
    link: 'mailto:jle24@lsu.edu',
    image: Le,
  },
  White: {
    code: 'White',
    id: 3,
    name: 'Alexis White',
    isActive: true,
    image: White,
    degree: 'BA',
    link: 'mailto:alexisw@lsu.edu',
    role: 'Account Specialist',
  },
  Irvin: {
    code: 'Irvin',
    id: 4,
    name: 'Charles Irvin',
    isActive: true,
    image: Irvin,
    role: 'External Advisory Committee',
    degree: 'PhD',
    institution: 'University of Vermont.',
    link: 'https://bit.ly/2NgIOVQ',
  },
  Stanton: {
    code: 'Stanton',
    id: 5,
    name: 'Bruce Stanton',
    isActive: true,
    image: Stanton,
    degree: 'PhD',
    role: 'External Advisory Committee',
    institution: 'Dartmouth College.',
    link: 'https://bit.ly/2pRtnuU',
  },
  Fessler: {
    code: 'Fessler',
    id: 6,
    name: 'Michael Fessler',
    isActive: true,
    image: Fessler,
    degree: 'MD',
    role: 'External Advisory Committee',
    institution: 'National Institute of Environmental Health Sciences.',
    link: 'https://bit.ly/32M5pzM',
  },
  Bubeckwardenburg: {
    code: 'Bubeckwardenburg',
    id: 7,
    name: 'Juliane Bubeckwardenburg',
    isActive: false,
    image: Bubeckwardenburg,
    degree: 'MD, PhD',
    role: 'External Advisory Committee',
    institution: 'Washington University in St.Louis.',
    link: 'https://bit.ly/32KDq3x',
  },
  Baumgarth: {
    code: 'Baumgarth',
    id: 8,
    name: 'Nicole Baumgarth',
    isActive: true,
    image: Baumgarth,
    degree: 'DVM, PhD',
    role: 'External Advisory Committee',
    institution: 'University of California, Davis.',
    link: 'https://bit.ly/32McZdM',
  },
  Baines: {
    code: 'Baines',
    id: 9,
    name: 'Joel Baines',
    isActive: true,
    institution: 'Louisiana State University',
    degree: 'VMD, PhD',
    role: 'Kenneth F. Burns, Chair Dean, School of Veterinary Medicine',
    image: Baines,
    link: 'https://bit.ly/2Wa5b3f',
  },
  Kaushal: {
    code: 'Kaushal',
    id: 10,
    name: 'Deepak Kaushal',
    isActive: false,
    degree: 'PhD',
    institution: 'Texas Biomedical Research Institute',
    role: 'Professor and Director',
    image: Kaushal,
    link: 'https://bit.ly/2W9mLnZ',
  },
  Kousoulas: {
    code: 'Kousoulas',
    id: 11,
    name: 'Konstantin Kousoulas',
    isActive: true,
    institution: 'Louisiana State University',
    degree: 'PhD',
    role: 'Professor and Head, Pathobiological Sciences',
    image: Kousoulas,
    link: 'https://bit.ly/2PhLrt6',
  },
  Cormier: {
    code: 'Cormier',
    id: 12,
    name: 'Stephania Cormier',
    isActive: true,
    degree: 'PhD',
    institution: 'Louisiana State University',
    role: 'Professor and Associate Vice President for Research',
    image: Cormier,
    link: 'https://bit.ly/2PrEN3B',
  },
  Kolls: {
    code: 'Kolls',
    id: 13,
    name: 'Jay Kolls',
    isActive: false,
    degree: 'MD',
    institution: 'Tulane University',
    role: 'Professor of Medicare and Pediatrics, John W Deming Endowed Chair',
    image: Kolls,
    link: 'https://bit.ly/2pLRUBQ',
  },
  Reed: {
    code: 'Reed',
    id: 14,
    name: 'Kevin Reed',
    isActive: false,
    degree: 'MD',
    role:
      'Associate Professor of Medicine, Associate Dean of Academic Affairs in Baton Rouge',
    institution: 'LSU Health Sciences Center, Baton Rouge',
    link: 'https://marybird.org/doctor/reed/',
    image: Reed,
  },
  Dugas: {
    code: 'Dugas',
    id: 15,
    name: 'Tammy Dugas',
    isActive: true,
    degree: 'PhD',
    institution: 'Louisiana State University',
    title:
      'Department Chairperson - Interim Department Head Comparative Biomedical Sciences (CBS)',
    role: 'Co-Director',
    image: Dugas,
    link: 'https://bit.ly/33YO5Ic',
  },
  Langhor: {
    code: 'Langhor',
    id: 16,
    name: 'Ingeborg Langohr',
    isActive: true,
    degree: 'DVM, PhD',
    role: 'Co-investigator',
    institution: 'Louisiana State University',
    image: Langohr,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/ilangohr',
  },
  Christofferson: {
    code: 'Christofferson',
    id: 17,
    name: 'Rebecca Christofferson',
    isActive: true,
    degree: 'PhD',
    institution: 'Louisiana State University',
    role: 'Co-investigator',
    image: Christofferson,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/rcarri1',
  },
  Rangasamy: {
    code: 'Rangasamy',
    id: 18,
    name: 'Tirumalai Rangasamy',
    isActive: true,
    degree: 'PhD',
    abstract:
      'Dr. Rangasamy is an Assistant Professor (Research) in the Department of Pathobiological and Center for Lung Biology and Disease at Louisiana State University, Baton Rouge. Dr. Rangasamy received his BSc, MSc, and PhD degrees from the University of Madras (India). He did his postdoctoral trainings at the Indian Institute of Science (Bangalore, India), Pierre et Marie Curie University (Paris, France), and Johns Hopkins University (Baltimore), and then worked as an Assistant Research Professor at the University of Rochester Medical Center, prior to his appointment at LSU in 2015. The overall goal of Dr. Rangasamy’s  research program is to identify the genetic mechanisms of susceptibility to oxidative stress related lung diseases such as cigarette smoke (CS)–mediated chronic obstructive pulmonary disease (COPD), allergic asthma, bacterial pneumonia and septic shock. Our long term objectives are 1) to identify the host factors that determine the susceptibility to CS-induced COPD, allergic airway inflammation,  bacterial pneumonia, and acute lung injury and septic shock, using genetic, genomic, and proteomic methods which are especially valuable in the study of complex disease conditions, 2) to identify and characterize specific molecular pathways that are associated with COPD and asthma, 3) to investigate the role of the major anti-oxidative transcription factor Nrf2 in dendritic cell activation, T cell differentiation, and in stem cell differentiation, and 4) to develop small molecule/stem cell based therapeutic interventions in oxidative stress related lung diseases. Dr. Rangasamy has extensive expertise in mouse models of inflammatory lung diseases including CS-induced pulmonary emphysema, allergic asthma, bacterial pneumonia and endotoxin/cecal ligation and puncture mediated acute lung injury and septic shock; computer assisted lung morphometric measurements, measurement of lung elastance and resistance in asthmatic mice, isolation and characterization of mesenchymal stem cells from the lung and bone marrows, generation of myeloid dendritic cells/macrophages/neutrophils from bone marrows, differentiation of Th1/Th2/FOX P3 regulatory T cells, bacterial culture, extracellular and intracellular (opsonophagocytosis) bacterial killing assays, gene expression arrays (Affymetrix), expression (in E. coli) and purification (using FPLC) of recombinant proteins, development of contraceptive vaccine (mice rats and rabbits), epitope mapping, flow cyotometry, as well as in various immunological and molecular techniques. Dr. Rangasamy is currently working with Prof. Samithamby Jeyaseelan (Director, Center For Lung Biology and Disease). Dr. Rangasamy is investigating the therapeutic potential of prospectively purified lung mesenchymal stem cells in COPD (emphysema)-associated bacterial exacerbations, as well as in various infectious lung diseases including pneumonia caused by Klebsiella pneumoniae, Streptococcus pneumoniae (Pneumococcal pneumonia), and superbugs [methicillin resistant Staphylococcus aureus (MRSA), and carbapenem resistant Klebsiella pneumoniae] using pre-clinical mouse models.',
    institution: 'Louisiana State University',
    role: 'Pilot Investigator',
    // role: 'Co-Investigator',
    image: Rangasamy,
    year: '2019',
    link: 'http://facultypages.vetmed.lsu.edu/faculty/trangasamy',
    abtitle: 'Role of LMSCs in SHS-mediated bacterial exacerbation and emphysema ',
  },
  Chouljenko: {
    code: 'Chouljenko',
    id: 19,
    name: 'Vladimir Chouljenko',
    isActive: true,
    degree: 'PhD',
    institution: 'Louisiana State University',
    role: 'Co-Investigator',
    image: Vladimir,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/vchoul1',
  },
  Patial: {
    code: 'Patial',
    id: 20,
    name: 'Sonika Patial',
    degree: 'DVM, PhD, Dipl ACVP',
    isActive: true,
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
  Saini: {
    code: 'Saini',
    id: 21,
    name: 'Yogesh Saini',
    degree: 'DVM PhD',
    isActive: true,
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
  Huang: {
    code: 'Huang',
    id: 22,
    name: 'Weishan Huang',
    degree: 'PhD',
    isActive: true,
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
  Noel: {
    code: 'Noel',
    id: 23,
    name: 'Alexandra Noel',
    degree: 'PhD',
    year: '2020',
    isActive: true,
    abstract:
      'Dr. Alexandra Noël is an Assistant Professor in the Department of Comparative Biomedical Sciences, School of Veterinary Medicine, at Louisiana State University. Dr. Noël obtained her BSc. in Biomedical Sciences, her MSc. in Occupational and Environmental Health, and her PhD in Public Health with a specialization in Toxicology and Risk Assessment, all from the University of Montreal (QC, Canada). She is an inhalation toxicologist with over ten years of experience in inhalation and lung biology. Her research focuses on the pulmonary effects induced by inhaled nanomaterials (< 100 nm) and tobacco products. She also conducts developmental toxicology studies on pulmonary effects of in utero and adult exposures to nanoparticles, cigarette second-hand smoke, electronic-cigarette and JUUL aerosols, as well as ultrafine combustion-derived particles. The overarching objectives and goals of her research program are to improve public health by providing in vitro and in vivo scientific evidence related to the health effects induced by environmental exposures. More specifically, her research seeks to investigate the fundamental mechanism at the epigenetic, molecular and cellular levels that underlie the developmental origins of health and disease, with respect to respiratory effects caused by distinct emerging inhaled environmental pollutants. Dr. Noël’s lab is currently funded, among others, by the National Institutes of Health and the Louisiana Board of Regents. In addition, Dr. Noël’s was the chair of the 2017 Gordon Research Seminar (GRS) on Lung Development Injury & Repair; she currently serves on the American Thoracic Society (ATS) Membership Committee (2018-2020); and she is the 2019-2020 Vice-President (Elect) of the Society of Toxicology (SOT) South-Central Chapter. ',
    institution: 'Louisiana State University',
    image: Noel,
    role: 'Pilot Investigator',
    link: 'https://bit.ly/2pP5Jzh',
    abtitle: 'Effects of nicotine salt-rich JUUL aerosols on the mouse developing lung',
    mentors: [
      { name: 'Tammy Dugas', link: 'https://bit.ly/33YO5Ic' },
      {
        name: 'Arthur Penn',
        link: 'http://facultypages.vetmed.lsu.edu/faculty/apenn1',
      },
    ],
  },
  Yoshimmura: {
    code: 'Yoshimmura',
    id: 24,
    name: 'Masami Yoshimmura',
    isActive: true,
    year: '2019',
    abtitle: 'The role of AC7 in innate immune responses in acute lung injury induced by LPS and alcohol.',
    institution: 'Louisiana State University',
    role: 'Pilot Investigator',
    image: Yoshimmura,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/fukugawa',
  },
  GuerreroPlata: {
    code: 'GuerreroPlata',
    id: 25,
    name: 'Antonieta Guerrero-Plata',
    year: '2019',
    isActive: true,
    abtitle: 'Regulatory role of ncRNA in human metapneumovirus infection.',
    abstract:
      'Dr. Guerrero-Plata is an Associate Professor in Immunology in the Department of Pathobiological Sciences at Louisiana State University. She is a licensed clinical chemist from the Universidad Autonoma de Tamaulipas and received an MSc and Ph.D. degrees from the Universidad Nacional Autonoma de Mexico (UNAM), with additional graduate training at Imperial College London. Dr. Guerrero-Plata completed her postdoctoral training at UTMB before her appointments as Instructor and Assistant Professor at the same institution. She joined the department of PBS at LSU to establish her research program focused on innate immunity and respiratory viruses, including the study of the molecular mechanisms responsible for the activation and subversion of the immune response to human pneumovirus infections.',
    institution: 'Louisiana State University',
    role: 'Pilot Investigator',
    image: GuerreroPlata,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/aguerrp',
  },
  Ogundele: {
    code: 'Ogundele',
    id: 26,
    name: 'Olalekan Ogundele',
    year: '2019',
    title: 'Pilot Investigator',
    isActive: true,
    abtitle: 'Attenuating mechanical lung damage in the progression of sepsis: A novel neural approach.',
    abstract:
      'Dr. Olalekan Ogundele is an Assistant Professor in the Department of Comparative Biomedical Sciences, LSU School of Veterinary Medicine, Baton Rouge. Dr. Ogundele’s lab study neural mechanisms that underlie behavior and systemic function. His research is focused on developing novel tools for probing neural circuits in rodent experimental models in vivo. Methods used in his lab include cre-lox targeting of neuron sub-populations, optogenetic modulation, neural circuit tracing, in vivo recording from brain areas of anesthetized and awake mice. Currently, Dr. Ogundele’s lab is using these methods to elucidate firing rate homoeostasis of pre-BötC area rhythmogenic neurons in a mouse model of endotoxemia. Dr. Ogundele obtained his Bachelors and Doctorate degree from the University of Ilorin, Nigeria. He was an IBRO-ISN postdoctoral fellow with the Neural Systems Laboratory (LSU), before his appointment as Assistant Professor in 2017.',
    institution: 'Louisiana State University',
    role: 'Pilot Investigator',
    image: Ogundele,
    link: 'https://bit.ly/2pdpKzv',
  },
    Jeansonne: {
  	code: 'Jeansonne',
  	id: 27,
  	name: 'Duane Jeansonne',
  	isActive: true,
  	institution: 'Louisiana State University',
  	degree: 'PhD',
    image: Jeansonne,
    title:
      'Assistant Professor- Research in the Department of Pathobiological Sciences',
    role: 'PIP Core coordinator',
    link: 'mailto:djeansonne1@lsu.edu'
   },
   Balasuriya: {
    code: 'Balasuriya',
    id: 28,
    name: 'Udeni Balasuriya',
    isActive: true,
    institution: 'Louisiana State University',
    degree: 'PhD',
    role:
      'Director and Professor of Virology at the Louisiana Animal Disease Diagnostic Laboratory (LADDL)',
    image: Balasuriya,
    link: 'http://facultypages.vetmed.lsu.edu/faculty/balasuriya1'
  },
  Fu: {
     code: 'Fu',
     id: 29,
     name: 'Xing Fu',
     degree: 'PhD',
     isActive: true,
     year: '2020',
     abtitle: 'Cardiac and pulmonary fibroblast activity induced by left ventricular pressure overload',
     abstract:
     "Dr. Fu is an Assistant Professor in the School of Animal Sciences at Louisiana State University, Baton Rouge. Dr. Fu obtained his BS in Biotechnology from Henan Normal University (China) in 2007. He received his MS in Biology from Arkansas State University in 2010 and his PhD in Animal Sciences from Washington State University under the supervision of Dr. Min Du in 2015. He was then trained in Dr. Jeffery Molkentin’s laboratory at Cincinnati Children’s as a postdoctoral fellow for 2 years before joining Louisiana State University in 2017. Dr. Fu’s laboratory currently focuses on fibrotic diseases in the heart and lung. Ongoing research is aimed to understand the contribution of fibroblasts to tissue fibrosis and the molecular mechanisms regulating post-injury fibroblast activation and differentiation. The ultimate goal is to identify novel treatment strategies that mitigate fibrotic diseases through manipulating fibroblast activity.",

     institution: 'Louisiana State University',
     image: Fu,
     role: 'Project Investigator',
     link: 'https://www.lsuagcenter.com/profiles/XFu1',
     mentors: [
       { name: 'Placeholder', link: '#' },
     ],
   },
   Chen: {
      code: 'Chen',
      id: 30,
      name: 'Chen Chen',
      degree: 'MD, PhD',
      isActive: true,
      institution: 'Louisiana State University',
      image: require('../assets/people/chenchen.jpg'),
      abstract: "Dr. Chen Chen is an Assistant Professor in the Department of Biological Sciences at Louisiana State University.  Dr. Chen obtained her Ph.D. in the Department of Microbiology and Immunology from the Medical College of Wisconsin.   She later obtained her postdoctoral training in the Department of Microbiology at The University of Chicago and the Department of Microbiology at Medical College of Wisconsin.  Dr. Chen is a bacterial microbiologist with over ten years of experience in bacterial toxins, S. aureus pathogenesis, bacterial pathogen-host interactions, and glycobiology.  The main goal of Dr. Chen’s laboratory is to understand how S. aureus seamlessly transitions between infection and colonization.  S. aureus-associated pneumonia accounts for an estimated 50,000 staphylococcal infections per year in the United States.  Although S. aureus colonization (30% of humans) is strongly associated with higher risks for clinical infections, most colonized individuals will not experience S. aureus infections, suggesting that S. aureus maintains a dedicated balance with the host.  Neutrophils are the first host defense against S. aureus.  During pulmonary infection, the neutrophil influx is a double-edged sword: neutrophils clear the invading pathogens while overzealous neutrophils can cause tissue damage leading to pneumonia.  Dr. Chen’s current research seeks to understand the mechanisms by which S. aureus keeps lung neutrophils at rest, which is crucial to decipher how S. aureus transitions between silent colonization and infection.  Dr. Chen was awarded K12 Scholar, Translational GlycOmics Program for Career Development In Glycoscience by NIH/NHLBI (2020). Dr. Chen was the PI for the SBIR phase I grant by NIH/NHLBI to develop “Therapeutic Delivery of Adp-Ribosylarginine Hydrolase” (2015-2017). She is currently a Review Editor on the Editorial Board of Microbes and Innate Immunity (specialty section of Frontiers in Cellular and Infection Microbiology).",
      role: 'Pilot Investigator',
      link: 'https://lsu.edu/science/biosci/faculty_and_staff/chenchen.php',
    },
    Carossino: {
       code: 'Carossino',
       id: 31,
       name: 'Mariano Carossino',
       degree: 'DVM, PhD',
       isActive: true,
       institution: 'Louisiana State University',
       image: require('../assets/people/mcarossino.jpg'),
       abstract: "Dr. Mariano Carossino is an Assistant Professor and Anatomic Pathologist in the Department of Pathobiological Sciences and the Louisiana Animal Disease Diagnostic Laboratory (LADDL) at Louisiana State University School of Veterinary Medicine (LSU-SVM). Dr. Carossino obtained his DVM from the Escuela de Veterinaria, Universidad del Salvador in Buenos Aires, Argentina. In 2013, he was awarded a Fulbright Scholarship and joined the Department of Veterinary Science, University of Kentucky, where he obtained his Ph. D. in Cellular and Molecular Virology. He subsequently completed residency training in Veterinary Anatomic Pathology at LSU (2018-2021) prior to his appointment in the Department of Pathobiological Sciences. Dr. Carossino is currently a diplomate of the American College of Veterinary Microbiologists (ACVM) with an emphasis in Virology and has 10 years of experience as a virologist. The overarching focus of Dr. Carossino’s research is to understand the pathogenesis and immunopathology of RNA viruses combining translational animal models and modern, molecular pathology techniques to comparatively study virus-host interactions during respiratory and persistent viral infections. Dr. Carossino has been involved in the comparative evaluation of different animal models of COVID-19. He is specifically interested in the host tropism of SARS-CoV-2, its interactions with the host at the pulmonary level, and understanding at the cellular and molecular level how different comorbidities shape the outcome of COVID-19.",
       role: 'Pilot Investigator',
       link: 'http://facultypages.vetmed.lsu.edu/faculty/mcarossino1',
     },
     Wen: {
        code: 'Wen',
        id: 32,
        name: 'Xue Wen',
        degree: 'PhD, M.AP.Stat, MEd, BA',
        isActive: true,
        institution: 'Louisiana State University',
        image: require('../assets/people/xWen.jpg'),
        role: 'Co-Investigator',
        link: 'http://facultypages.vetmed.lsu.edu/faculty/mWen1',
      },
      Mehra: {
         code: 'Mehra',
         id: 33,
         name: 'Smitri Mehra',
         degree: 'PhD',
         year: '2018',
         isActive: true,
         institution: 'Tulane University',
         image: require('../assets/people/Mehra.jpg'),
         role: 'Project Investigator',
         link: 'https://tnprc.tulane.edu/faculty/smriti-mehra-phd',
         abtitle: ' Indoleamine dioxygenase suppresses pulmonary T-cell immunity to Mycobacterium tuberculosis',
       },
       Hoang: {
          code: 'Hoang',
          id: 34,
          name: 'Ky Hoang',
          degree: 'degree',
          year: 'year',
          isActive: true,
          institution: 'inst',
          image: require('../assets/people/NEED.jpg'),
          role: 'Coordinator',
          link: '#',
          abtitle: 'abTitle',
        },
        Steele: {
           code: 'Steele',
           id: 35,
           name: 'Chad Steele',
           degree: 'degree',
           year: 'year',
           isActive: true,
           institution: 'Tulane University',
           image: require('../assets/people/NEED.jpg'),
           role: 'Chair of the EAC',
           link: '#',
           abtitle: 'abTitle',
         },
         Lund: {
            code: 'Lund',
            id: 36,
            name: 'Frances Lund',
            degree: 'degree',
            year: 'year',
            isActive: true,
            institution: 'University of Alabama at Birmingham',
            image: require('../assets/people/NEED.jpg'),
            role: 'role',
            link: '#',
            abtitle: 'abTitle',
          },
          Varga: {
             code: 'Varga',
             id: 37,
             name: 'Steve Varga',
             degree: 'degree',
             year: 'year',
             isActive: true,
             institution: 'University of Iowa',
             image: require('../assets/people/NEED.jpg'),
             role: 'role',
             link: '#',
             abtitle: 'abTitle',
           },
           Jaspers: {
              code: 'Jaspers',
              id: 38,
              name: 'Ilona Jaspers',
              degree: 'degree',
              year: 'year',
              isActive: true,
              institution: 'UNC Chapell Hill',
              image: require('../assets/people/NEED.jpg'),
              role: 'role',
              link: '#',
              abtitle: 'abTitle',
            },
            Pinkerton: {
               code: 'Pinkerton',
               id: 39,
               name: 'Kent Pinkerton',
               degree: 'degree',
               year: 'year',
               isActive: true,
               institution: 'University of California, Davis',
               image: require('../assets/people/NEED.jpg'),
               role: 'role',
               link: '#',
               abtitle: 'abTitle',
             },
             Garden: {
                code: 'Garden',
                id: 40,
                name: 'Oliver Garden',
                degree: 'degree',
                year: 'year',
                isActive: true,
                institution: 'inst',
                image: require('../assets/people/NEED.jpg'),
                role: 'Chair of IAC',
                link: '#',
                abtitle: 'abTitle',
              },
              Francis: {
                 code: 'Francis',
                 id: 41,
                 name: 'Joseph Francis',
                 degree: 'degree',
                 year: 'year',
                 isActive: true,
                 institution: 'inst',
                 image: require('../assets/people/NEED.jpg'),
                 role: 'Associate Dean for Research and Graduate Studies',
                 link: '#',
                 abtitle: 'abTitle',
               },
               Leise: {
                  code: 'Leise',
                  id: 42,
                  name: 'Britta Leise',
                  degree: 'degree',
                  year: 'year',
                  isActive: true,
                  institution: 'inst',
                  image: require('../assets/people/NEED.jpg'),
                  role: 'Associate Dean for Faculty Affairs',
                  link: '#',
                  abtitle: 'abTitle',
                },
                Vicente: {
                   code: 'Vicente',
                   id: 43,
                   name: 'Graca Vicente',
                   degree: 'degree',
                   year: 'year',
                   isActive: true,
                   institution: 'inst',
                   image: require('../assets/people/NEED.jpg'),
                   role: 'Boyd Professor',
                   link: '#',
                   abtitle: 'abTitle',
                 },
                 Abuaita: {
                    code: 'Abuaita',
                    id: 44,
                    name: 'Basel Abuita',
                    degree: 'degree',
                    year: 'year',
                    isActive: true,
                    institution: 'inst',
                    image: require('../assets/people/NEED.jpg'),
                    role: 'role',
                    link: '#',
                    abtitle: 'abTitle',
                  },
                  Beavers: {
                     code: 'Beavers',
                     id: 45,
                     name: 'William Beavers',
                     degree: 'degree',
                     year: 'year',
                     isActive: true,
                     institution: 'inst',
                     image: require('../assets/people/NEED.jpg'),
                     role: 'role',
                     link: '#',
                     abtitle: 'abTitle',
                   },
};
