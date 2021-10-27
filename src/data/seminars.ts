import moment from 'moment';

import { seminar } from '../types/seminar';
import {
  laurieFlyerThumb,
  liwuFlyerThumb,
  mizgerdFlyerThumb,
  workshopFlyerThumb,
  workshopPdf,
  mizgerdPdf,
  liwuPdf,
  lauriePdf,
  coronavirusThumb,
  conferencePdf,
  conferenceFlyerThumb,
  agendaPdf,
  agendaFlyerThumb,
  IncucytePdf,
  IncucyteFlyerThumb,
  SeahorsePdf,
  SeahorseFlyerThumb
} from '../assets/pdfs/index';

// the first seminar is automatically featured

export const seminars: seminar[] = [
  {
    title: 'Seahorse Zoom Webinar',
    id: 'seahorsewebinar-2021-07-07',
    code: 'SEMINAR',
    eventType: 'Training',
    date: moment('2021-07-07'),
    time: '2:00 pm - 3:00 pm',
    registrationDueDate: moment('2021-07-07'),
    pdfLink: SeahorsePdf,
    description: 'Agilent Seahorse XF Technology measures the rates of cellular oxygen consumption and acidification of the medium surrounding cells in a microplate. This allows for analysis of changes in mitochondrial and glycolytic function as well as ATP production rates from these two sources. Metabolism drives cellular fate, phenotype, and function and the Seahorse has led the way in showing these connections for well over a decade.',
    // video: 'https://www.youtube.com/watch?v=pg5RcQqxpXs',
    // videoname: 'Seahorse Zoom Webinar',
    location: 'Louisiana State University (Virtual)',
    image: SeahorseFlyerThumb,
    link: ` https://agilent.webex.com/join/jay.dunn`,
  },
  {
    title: 'Incucyte S3 New User Training',
    id: 'incucytetraining-2021-01-11',
    code: 'SEMINAR',
    eventType: 'Training',
    date: moment('2021-01-11'),
    time: '12:30 pm - 4:30 pm',
    registrationDueDate: moment('2021-01-11'),
    pdfLink: IncucytePdf,
    speakers:
      'Mark Metcalf',
    speakerUniversities: 'Area Manager of Field Applications Scientists (South/Southeast) at Sartorius BioAnalytics',
    description: 'Sponsored by Center for Lung Biology & Disease. For more information contact For more information contact: Duane Jeansonne, email: djeansonne1@lsu.edu.',
    location: 'Louisiana State University (Virtual)',
    image: IncucyteFlyerThumb,
    link: `https://www.essenbioscience.com/en/`,
  },
  {
    title: 'Louisiana Lung Conference',
    id: 'lungconference-2020-09-15',
    code: 'SEMINAR',
    eventType: 'Workshop',
    date: moment('2020-09-15'),
    time: '8:45 am - 3:15 pm',
    registrationLink: 'https://redcap.lbrn.lsu.edu/surveys/?s=37EKHP849F',
    registrationDueDate: moment('2020-09-15'),
    pdfLink: conferencePdf,
    agendaLink: agendaPdf,
    agendaImage: agendaFlyerThumb,
    speakers:
      'Steven M. Varga, Joseph P. Mizgerd',
    speakerUniversities: 'University of Iowa School of Medicine, Boston University School of Medicine',
    location: 'Louisiana State University (Virtual)',
    image: conferenceFlyerThumb,
    link: `/event/${0}`,
  },
  {
    title: 'Proteomics Workshop',
    id: 'proteomics-2020-01-24',
    code: 'SEMINAR',
    eventType: 'Workshop',
    date: moment('2020-01-24'),
    time: '10 am - 12 pm',
    registrationLink: 'https://redcap.lbrn.lsu.edu/surveys/?s=3EKCN8L4NH',
    registrationDueDate: moment('2020-01-19'),
    pdfLink: workshopPdf,
    speakers:
      'Stephanie Byrum, Ricky Edmonson, Samuel Mackintosh, Alan Tackett',
    speakerUniversities: 'University of Arkansas for Medical Sciences',
    location: 'Louisiana State University (PBS Conference room 3511)',
    image: workshopFlyerThumb,
    link: `/event/${0}`,
  },
  {
    title: 'Cancelled - Pneumonia Biology - Lungs Learn from Experience',
    id: 'pneumonia-2020-03-20',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-03-20'),
    time: '12 pm',
    speakers: 'Joseph Mizgerd, Sc.D.',
    speakerUniversities: 'Boston University',
    pdfLink: mizgerdPdf,
    location: 'Cancelled',
    image: mizgerdFlyerThumb,
  },
  {
    title: 'Leukocyte-Endothelial Cell Interactions...',
    id: 'leukocyte-2020-02-28',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-02-28'),
    time: '12 pm',
    speakers: 'Professor Laurie Kilpatrick, Ph.D.',
    speakerUniversities: 'Temple University',
    pdfLink: lauriePdf,
    location: 'LSU Vet Med Room 1212C',
    image: laurieFlyerThumb,
  },
  {
    title: 'Innate Immune Memory Dynamics...',
    id: 'innate-2020-02-14',
    code: 'SEMINAR',
    eventType: 'Presentation',
    date: moment('2020-02-14'),
    time: '12 pm',
    pdfLink: liwuPdf,
    speakers: 'Professor Liwu Li, Ph.D',
    speakerUniversities: 'Virginia Tech',
    location: 'LSU Vet Med Room 1212B',
    image: liwuFlyerThumb,
  },
  {
    title: '2021 Louisiana Lung Conference',
    id: 'lung2021',
    code: 'SEMINAR',
    eventType: 'Training',
    featured: false,
    hasMap: false,
    date: moment('2021-09-07'),
    time: '8:45am - 4:05 pm',
    registrationLink: 'https://redcap.lbrn.lsu.edu/surveys/?s=J9FEAX7CF8',
    registrationDueDate: moment('2021-09-03'),
    agendaLink: require('../assets/pdfs/2021 CLBD Symposium Schedule.pdf'),
    pdfLink: require('../assets/pdfs/2021 CLBD Symposium v3 Vert.pdf'),
    description: "This year's Louisiana Lung Conference will be held virtually. Keynote speakers are Dr. Bethany Moore, University of Michigan School of Medicine and Michael Fessler, National Institute of Environmental Health Sciences NIEHS. A essentials for funding success panel will follow with Rachel Zemans, University of Michigan School of Medicine and Chad Steele, Tulane University School of Medicine.",
    location: 'Louisiana State University (Virtual)',
    video: 'https://www.youtube.com/watch?v=VUTSH-2VZhw',
    videoname: 'The Essentials for Funding Success',
    videodesc: 'During the 2021 Louisiana Lung Conference: Pathogenesis of Infectious and Non-Infectious Pulmonary Diseases September 07, 2021 (Virtual), Speaker on The essentials for funding success: How to write a successful application?, Rachel Zemans, M.D., University of Michigan School of Medicine Associate Professor of Medicine, and Speaker on The essentials for funding success: What reviewers are looking for? Chad Steele, Ph.D., Tulane University School of Medicine Chair and Professor of Microbiology and Immunology',
    image: require('../assets/pdfs/2021 CLBD Symposium v3 Vert_thumb.png'),
    link: ` https://agilent.webex.com/join/jay.dunn`,
  },
];
