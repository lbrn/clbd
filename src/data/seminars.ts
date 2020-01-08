import moment from "moment";
import sciencyImage from "../assets/seminars/cell.jpg";
import altSciencyImage from "../assets/seminars/jellies.jpg";
import vetSchool from "../assets/featuredSeminars/vet_school.jpg";
import { seminar } from "../models/seminar";

// the first seminar is automatically featured

export const seminars: seminar[] = [
	{
		title: "Louisiana Lung Conference",
		eventType: "Annual Conference",
		date: moment("2019-10-19"),
		time: "8 am - 12:30 pm",
		speakers:
			"Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.",
		cost: "free",
		location: "LSU School of Veterinary Medicine",
		image: vetSchool
	},
	{
		title: "Louisiana Lungum Ipsum",
		eventType: "Annual Conference",
		date: moment("2019-11-19"),
		time: "8 am - 12:30 pm",
		speakers:
			"Jay Kolls, MD, Deepak Kaushal, Ph.D., Frances Lund, Ph.D., and Troy Randall, Ph.D.",
		cost: "free",
		location: "LSU School of Veterinary Medicine",
		image: vetSchool
	},
	{
		eventType: "Seminar",
		title: "Vijay Rathinam",
		date: moment("2019-9-20"),
		image: sciencyImage
	},
	{
		eventType: "Seminar",
		title: "Fayyaz Sutterwala",
		date: moment("2019-9-27"),
		image: altSciencyImage
	},
	{
		eventType: "Seminar",
		title: "Changqing Ju",
		date: moment("2019-10-04"),
		image: sciencyImage
	},
	{
		eventType: "EAC visit",
		title: "Bruce Stanton",
		date: moment("2019-10-08"),
		image: altSciencyImage
	},
	{
		eventType: "Louisiana Lung Conference",
		title: "Bruce Stanton",
		date: moment("2019-10-09"),
		image: sciencyImage
	},
	{
		eventType: "Seminar",
		title: "Juliane Bubeck Wardenburg",
		date: moment("2019-10-18"),
		image: altSciencyImage
	},
	{
		eventType: "Seminar",
		title: "Irving Allen",
		date: moment("2019-11-22"),
		image: sciencyImage
	}
];
