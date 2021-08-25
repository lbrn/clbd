import mentor from './mentor';

export default interface person {
  name: string; // full name
  year?: string;
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
  abtitle?: string;
}
