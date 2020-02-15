import mentor from '../models/mentor';

export default interface person {
  name: string;
  title?: string;
  abstract?: string;
  institution?: string;
  role?: string;
  img?: string;
  image?: string;
  link?: string;
  mentors?: mentor[];
  degree?: string;
}
