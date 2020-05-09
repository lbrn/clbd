import mentor from '../models/mentor';

export default interface person {
  name: string; // full name
  isActive: boolean;
  id: number;
  code: string; //last name
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
