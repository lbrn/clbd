import grantPhoto from '../assets/articles/home.jpg';
import huangPhoto from '../assets/articles/huangPhoto.png';
import sarrArticlePhoto from "../assets/articles/sarrArticle.png";
import { Saini, Noel } from '../assets/people';
import conferencePhoto from "../assets/articles/2020conferenceFlyerv2.png";
import article from '../types/article';
import incucytephoto from '../assets/pdfs/Incucyte Training.png';
import echophoto from '../assets/articles/Revolve-Specs-Image-new.jpg';
import { SeahorseFlyerThumb } from '../assets/pdfs';

export const articles: article[] = [
  {
    code: 'ARTICLE',
    isFeatured: true,
    title:
      'Congratulations to our COBRE investigator, Dr. Alexandra Noël for receiving the Zoetis Award for Research Excellence',
    contentPreview: `Alexandra Noël, PhD, assistant professor in the Department of Comparative Biomedical Sciences (CBS), received the Zoetis Award for Research Excellence. Zoetis presents an honorarium and inscribed plaque to a faculty member who has excelled in veterinary medical research during the past two years.`,
    image:  require('../assets/people/Noel.jpg'),
    link:
      'https://www.lsu.edu/vetmed/news/2022/research_awards.php',
  },
  {
    code: 'ARTICLE',
    // isFeatured: true,
    title:
      'CLBD project investigators receive prestigious Research Excellence and Distinguished Scholar Awards',
    contentPreview: `CLBD project investigators receive prestigious Research Excellence and Distinguished Scholar Awards`,
    image:  require('../assets/misc/Saini-Huang.png'),
    link:
      'https://www.lsu.edu/vetmed/vet_news/teaching_awards_2021.php',
  },
  {
    code: 'ARTICLE',
    title: 'NIH Awards $1.878 Million to Research Immune Response to Influenza',
    // isFeatured: true,
    contentPreview:  "The National Institutes of Health has awarded Weishan Huang, Ph.D., assistant professor of immunology at the LSU School of Veterinary Medicine, a $1.878 million grant to research the immune response to influenza infection that affects the respiratory system. The NIH supports scientific studies that turn discovery into health. ",
    image: require('../assets/articles/t-cell.jpg'),
    link: 'https://www.lsu.edu/vetmed/vet_news/huang_nih_grant.php',
  },
  {
    code: 'ARTICLE',
    title: '2021 Louisiana Lung Conference',
    // isFeatured: true,
    contentPreview:  "This year's Louisiana Lung Conference will be held virtually. Keynote speakers are Dr. Bethany Moore, University of Michigan School of Medicine and Michael Fessler, National Institute of Environmental Health Sciences NIEHS. A essentials for funding success panel will follow with Rachel Zemans, University of Michigan School of Medicine and Chad Steele, Tulane University School of Medicine.",
    image: require('../assets/pdfs/2021 CLBD Symposium v3 Vert_thumb.png'),
    link: 'event/lung2021',
  },
  {
    code: 'ARTICLE',
    title: `Seahorse Zoom Webinar.`,
    contentPreview: `Please join us for a seminar where we will learn about the Seahorse XFe96 and how the assays run on this instrument can make a powerful impact on disease research. The webinar will be held July 7th from 2:00-3:00pm.`,
    image: SeahorseFlyerThumb,
    link:
      'event/seahorsewebinar-2021-07-07',
  },
  {
    code: 'ARTICLE',
    title: `The CLBD has an ECHO Revolve microscope for fluorescent and light microscopy analysis.`,
    contentPreview: `The CLBD has an ECHO Revolve microscope for fluorescent and light microscopy analysis.`,
    image: echophoto,
    link:
      'https://discover-echo.com/revolve?utm_source=google&utm_medium=search&utm_campaign=11736234910&utm_term=fluorescence%20microscopy&utm_content=483044460665&gclid=Cj0KCQjw2NyFBhDoARIsAMtHtZ5pygswYMivbT_eqdOM9Cyvsempt9YXQic8E_s9XV_T9K8kvXdtAGMaAqNHEALw_wcB',
  },
  {
    code: 'ARTICLE',
    title: `2021 Incucyte S3 New User Training`,
    contentPreview: `Incucyte S3 New User Training Sponsored by Center for Lung Biology & Disease.`,
    image: incucytephoto,
    link:
      '/event/incucytetraining-2021-01-11',
  },
  {
    code: 'ARTICLE',
    title: `2020 Louisiana Lung Conference, Sponsored by Center for Lung Biology & Disease`,
    contentPreview: `This year's Louisiana Lung Conference will be held virtually. Keynote speakers are Dr. Steven M. Varga, Professor of Immunology and Associate Dean for Academic Affairs and at the University of Iowa School of Medicine and Dr. Joseph P. Mizgerd, Professor of Medicine and Microbiology & Director, Pulmonary Center at the Boston University School of Medicine. A virtual poster session followed by a panel sessions on Understanding the Grant Review Process will follow.`,
    image: conferencePhoto,
    link:
      '/event/lungconference-2020-09-15',
  },
  {
    code: 'ARTICLE',
    title: `LSU SVM Center for Lung Biology and Disease investigates lung and lung-related heart diseases during the COVID-19 pandemic`,
    contentPreview: `Last year, the LSU School of Veterinary Medicine (LSU SVM) launched the Center for Lung Biology and Disease (CLBD) with more than $11.5 million in funding over five years.`,
    image: sarrArticlePhoto,
    link:
      'https://www.lsu.edu/vetmed/vet_news/lung_biology_and_covid.php',
  },
  {
    code: 'ARTICLE',
    title: `LSU Assistant Professor Dr. Alexandra Noel receives a K01 award worth $850 K from the NIH/FDA`,
    contentPreview: `In a nation still struggling to understand the health effects of vaping - especially in young people - an LSU researcher is broadening her approach."`,
    image: Noel,
    link:
      'https://www.lsu.edu/research/recent_grant_successes/2020/0401-alexandranoel.php',
  },
  {
    code: 'ARTICLE',
    title: `Dr. Weishan Huang receives $375,096 NIH award`,
    contentPreview: `Weishan Huang, PhD, Assistant Professor in PBS, recently received $375,096 for her R56 (Bridge) award from the NIH/NIAID entitled "Heterogeneity and molecular signatures of therapeutic T cells in allergic airway inflammation."`,
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
  {
    code: 'ARTICLE',
    title:
      'Publications resulting from the Grant',
    contentPreview: ``,
    image:  require('../assets/articles/placeholder_noborder.png'),
    link:
      'https://reporter.nih.gov/search/3eVRPXLG3USXXnhTMmk5ZQ/project-details/10078618#publications',
  },

];
