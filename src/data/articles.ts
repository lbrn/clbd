import grantPhoto from "../assets/articles/home.jpg";

interface article {
	title: string;
	image: string;
	link: string;
}

// the first article in this array is automatically featured

export const articles: article[] = [
	{
		title: "Economic Development Win",
		image: grantPhoto,
		link: "https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php",
	}
];

