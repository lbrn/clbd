import moment from 'moment';
import sciencyImage from '../assets/seminars/cell.jpg'
import altSciencyImage from '../assets/seminars/jellies.jpg'

export const seminars = [
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