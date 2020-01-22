import moment from 'moment';
import sciencyImage from '../assets/seminars/cell.jpg';
import altSciencyImage from '../assets/seminars/jellies.jpg';
import li from '../assets/seminars/li.png';
import { seminar } from '../models/seminar';
import {
  laurieFlyer,
  liwuFlyer,
  mizgerdFlyer,
  workshopFlyer,
  workshopPdf,
  mizgerdPdf,
  liwuPdf,
  lauriePdf,
} from '../assets/pdfs/index';

// the first seminar is automatically featured

export const seminars: seminar[] = [
  {
    title: 'Proteomics Workshop',
    eventType: 'Workshop',
    date: moment('2020-01-24'),
    time: '10 am - 12 pm',
    registrationLink: 'https://redcap.lbrn.lsu.edu/surveys/?s=3EKCN8L4NH',
    registrationDueDate: moment('2020-01-19'),
    pdfLink: workshopPdf,
    speakers:
      'Stephanie Byrum, Ricky Edmonson, Samuel Mackintosh, Alan Tackett',
    location: 'Louisiana State University (PBS Conference room 3511)',
    image: workshopFlyer,
    link: `/event/${0}`,
  },
  {
    title: 'Pneumonia Biology - Lungs Learn from Experience',
    eventType: 'Presentation',
    date: moment('2020-03-20'),
    time: '12 pm',
    speakers: 'Joseph Mizgerd, Sc.D.',
    pdfLink: mizgerdPdf,
    location: 'LSU Vet Med Room 1212C',
    image: mizgerdFlyer,
  },
  {
    title: 'Leukocyte-Endothelial Cell Interactions...',
    eventType: 'Presentation',
    date: moment('2020-02-28'),
    time: '12 pm',
    speakers: 'Professor Laurie Kilpatrick, Ph.D.',
    pdfLink: lauriePdf,
    location: 'LSU Vet Med Room 1212C',
    image: laurieFlyer,
  },
  {
    title: 'Innate Immune Memory Dynamics...',
    eventType: 'Presentation',
    date: moment('2020-02-14'),
    time: '12 pm',
    pdfLink: liwuPdf,
    speakers: 'Professor Liwu Li, Ph.D',
    location: 'LSU Vet Med Room 1212B',
    image: liwuFlyer,
  },
];
