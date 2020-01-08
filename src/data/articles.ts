import grantPhoto from "../assets/articles/home.jpg";
import { Saini } from "../assets/people";

interface article {
	title: string;
	image: string;
	link: string;
}

// the first article in this array is automatically featured

export const articles: article[] = [
	{
		title: "LSU assistant professor receives $2.7 million",
		image: Saini,
		link:
			"https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php"
	},
	{
		title: "Economic Development Win",
		image: grantPhoto,
		link: "https://www.lsu.edu/vetmed/vet_news/saini_ones_award.php"
	}
];
