import moment from 'moment';
import sciencyImage from '../assets/seminars/cell.jpg'
import altSciencyImage from '../assets/seminars/jellies.jpg';
import vetSchool from '../assets/featuredSeminars/vet_school.jpg';

interface seminar {
	date: object;
	eventType: string;
	image: string;
	name: string;
	cost?: string;
	location?: string;
	speakers?: string;
	time?: string;
}

// the first two seminars in this array automagically become featured

export const seminars: seminar[] = [
	{
		name: 'Louisiana Lung Conference',
		eventType: 'Annual Conference',
		date: moment('2019-10-19'),
		time: '8 am - 12:30 pm',
		speakers: 'Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.',
		cost: 'free',
		location: 'LSU School of Veterinary Medicine',
		image: vetSchool
	},
	{
		name: 'Louisiana Lungum Ipsum',
		eventType: 'Annual Conference',
		date: moment('2019-11-19'),
		time: '8 am - 12:30 pm',
		speakers: 'Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.',
		cost: 'free',
		location: 'LSU School of Veterinary Medicine',
		image: vetSchool
	},
	{
		eventType: 'Seminar',
		name: 'Vijay Rathinam',
		date: moment('2019-9-20'),
		image: sciencyImage,
	},
	{
		eventType: 'Seminar',
		name: 'Fayyaz Sutterwala',
		date: moment('2019-9-27'),
		image: altSciencyImage,
	},
	{
		eventType: 'Seminar',
		name: 'Changqing Ju',
		date: moment('2019-10-04'),
		image: sciencyImage,
	},
	{
		eventType: 'EAC visit',
		name: 'Bruce Stanton',
		date: moment('2019-10-08'),
		image: altSciencyImage,
	},
	{
		eventType: 'Louisiana Lung Conference',
		name: 'Bruce Stanton',
		date: moment('2019-10-09'),
		image: sciencyImage,
	},
	{
		eventType: 'Seminar',
		name: 'Juliane Bubeck Wardenburg',
		date: moment('2019-10-18'),
		image: altSciencyImage,
	},
	{
		eventType: 'Seminar',
		name: 'Irving Allen',
		date: moment('2019-11-22'),
		image: sciencyImage,
	},
]