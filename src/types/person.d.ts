import mentor from './mentor';

export default interface person {
  name: string; // full name
  isActive: boolean;
  year?: string;
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
