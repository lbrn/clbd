import moment from 'moment';
import sciencyImage from '../assets/seminars/cell.jpg';
import altSciencyImage from '../assets/seminars/jellies.jpg';
import vetSchool from '../assets/featuredSeminars/vet_school.jpg';
import proteomicsWorkshop from '../assets/seminars/proteomics-workshop.png';
import kilPatrick from '../assets/seminars/kilpatrick.png';
import mizgerd from '../assets/seminars/mizgerd.png';
import li from '../assets/seminars/li.png';
import { seminar } from '../models/seminar';

// the first seminar is automatically featured

export const seminars: seminar[] = [
  {
    title: 'Pneumonia Biology - Lungs Learn from Experience',
    eventType: 'Presentation',
    date: moment('2020-03-20'),
    time: '12 pm',
    speakers: 'Joseph Mizgerd, Sc.D.',
    location: 'LSU Vet Med Room 1212C',
    image: mizgerd,
  },{
    title: 'Leukocyte-Endothelial Cell Interactions...',
    eventType: 'Presentation',
    date: moment('2020-02-28'),
    time: '12 pm',
    speakers: 'Professor Laurie Kilpatrick, Ph.D.',
    location: 'LSU Vet Med Room 1212C',
    image: kilPatrick,
  },
  {
    title: 'Innate Immune Memory Dynamics...',
    eventType: 'Presentation',
    date: moment('2020-02-14'),
    time: '12 pm',
    speakers: 'Professor Liwu Li, Ph.D',
    location: 'LSU Vet Med Room 1212B',
    image: li,
  },
  {
    title: 'Proteomics Workshop',
    eventType: 'Workshop',
    date: moment('2020-01-24'),
    time: '10 am - 12 pm',
    speakers:
      'Stephanie Byrum, Ricky Edmonson, Samuel Mackintosh, Alan Tackett',
    location: 'Louisiana State University (PBS Conference room 3511)',
    image: proteomicsWorkshop,
  },
];
