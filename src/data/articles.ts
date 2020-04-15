import grantPhoto from '../assets/articles/home.jpg';
import huangPhoto from '../assets/articles/huangPhoto.png';
import { Saini, Noel } from '../assets/people';
import article from '../models/article';

// the first article in this array is automatically featured

export const articles: article[] = [
  {
    code: 'ARTICLE',
    isFeatured: true,
    title: `LSU Assistant Professor Dr. Alexandra Noel receives a K01 award worth $850 K from the NIH/FDA`,
    contentPreview: `Weishan Huang, PhD, Assistant Professor in PBS, recently received $375,096 for her R56 (Bridge) award from the NIH/NIAID entitled "Heterogeneity and molecular signatures of therapeutic T cells in allergic airway inflammation."`,
    image: Noel,
    link:
      'https://www.lsu.edu/research/recent_grant_successes/2020/0401-alexandranoel.php',
  },
  {
    code: 'ARTICLE',
    title: `Dr. Weishan Huang receives $375,096 NIH award`,
    contentPreview: `In a nation still struggling to understand the health effects of vaping - especially in young people - an LSU researcher is broadening her approach."`,
    image: huangPhoto,
    link: 'https://twitter.com/LSUVetMed/status/1226948778269167616',
  },
  {
    code: 'ARTICLE',
    title:
      'LSU SVM assistant professor receives $2.7 million: Outstanding New Environmental Scientist (ONES) Award to investigate molecular mechanisms of ozone-induced lung diseases',
    contentPreview: `Yogesh Saini, DVM, PhD, assistant professor in the Department of Comparative Biomedical Sciences at the LSU School of Veterinary Medicine, has recently received an Outstanding New Environmental Scientist (ONES) award from the National Institute of Environmental Health Sciences (NIEHS) to conduct innovative research on ozone-induced lung diseases. Saini was awarded an approximately $2.7 million grant for his work to investigate how inhaled ozone disrupts normal physiology of our lungs...`,
    image: Saini,
    link: 'https://www.lsu.edu/vetmed/vet_news/saini_ones_award.php',
  },
  {
    code: 'ARTICLE',
    title:
      'Economic Development Win: LSU Garners $11.5M Grant from NIH to Establish Louisiana Pulmonary Research Center',
    contentPreview: `Baton Rouge- The LSU School of Veterinary Medicine, or LSU SVM, has
      been awarded more than $11.5 million in funding over five years from
      the National Institutes of Health, or NIH, to launch the Center for
      Lung Biology and Disease, or CLBD. Samithamby Jeyaseelan, the William
      L. Jenkins Professor in the Department of Pathobiological Sciences,
      will serve as principal investigator, and Rhonda Cardin, associate
      dean for research and advanced studies, will serve as co-investigator.`,
    image: grantPhoto,
    link:
      'https://www.lsu.edu/mediacenter/news/2019/02/04svm_jeyaseelan_nihcenter.php',
  },
];
