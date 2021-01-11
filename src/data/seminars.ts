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
  IncucyteFlyerThumb
} from '../assets/pdfs/index';

// the first seminar is automatically featured

export const seminars: seminar[] = [
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
    link: `/event/${0}`,
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
    title: 'All current in-person events are cancelled. COVID-19 information:',
    id: 'covid-',
    code: 'ANNOUNCEMENT',
    eventType: 'Workshop',
    featured: true,
    hasMap: false,
    image: coronavirusThumb,
  },
];
