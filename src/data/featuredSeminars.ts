
const vetSchool = require('../assets/featuredSeminars/vet_school.jpg');

interface seminar {
	date: string;
	time: string;
	speakers: string;
	cost: string;
	location: string;
	img: string;
	title: string;
}

export const featuredSeminars: [seminar, seminar] = [
	{
		title: 'Louisiana Lung Conference',
		date: 'October 9, 2019',
		time: '8 am - 12:30 pm',
		speakers: 'Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.',
		cost: 'free',
		location: 'LSU School of Veterinary Medicine',
		img: vetSchool
	},
	{
		title: 'Louisiana Lung Conference',
		date: 'October 9, 2019',
		time: '8 am - 12:30 pm',
		speakers: 'Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.',
		cost: 'free',
		location: 'LSU School of Veterinary Medicine',
		img: vetSchool
	}
]