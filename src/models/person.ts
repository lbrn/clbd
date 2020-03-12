import mentor from '../models/mentor';

export default interface person {
  name: string;
  isActive: boolean;
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
