// import {
//   Baines,
//   Balasuriya,
//   Baumgarth,
//   Bubeckwardenburg,
//   Cardin,
//   Christofferson,
//   Cormier,
//   Dugas,
//   Fessler,
//   GuerreroPlata,
//   Huang,
//   Irvin,
//   Jeyaseelan,
//   Kaushal,
//   Kolls,
//   Kousoulas,
//   Langohr,
//   Le,
//   Noel,
//   Ogundele,
//   Patial,
//   Rangasamy,
//   Reed,
//   Saini,
//   Stanton,
//   Vladimir,
//   White,
//   Yoshimmura,
// } from '../assets/people/index';
import { peopleData } from './peopleData';
import person from '../types/person';

const {
  Baines,
  Baumgarth,
  Bubeckwardenburg,
  Cardin,
  Christofferson,
  Chouljenko,
  Cormier,
  Dugas,
  Fessler,
  GuerreroPlata,
  Huang,
  Irvin,
  Jeyaseelan,
  Kaushal,
  Kolls,
  Kousoulas,
  Langhor,
  Le,
  Noel,
  Ogundele,
  Patial,
  Rangasamy,
  Reed,
  Saini,
  Stanton,
  White,
  Yoshimmura,
  Jeansonne,
  Balasuriya,
  Fu,
  Chen,
  Wen,
  Carossino,
} = peopleData;

interface peopleGroup {
  displayName: string;
  code: string;
  members: person[];
}

interface people {
  [key: string]: peopleGroup;
}

export const people: people = {
  leadership: {
    code: 'leadership',
    displayName: 'Leadership',
    members: [Jeyaseelan, Cardin, Le, White],
  },
  externalAdvisoryCommittee: {
    code: 'externalAdvisoryCommittee',
    displayName: 'External Advisory Committee',
    members: [Irvin, Stanton, Fessler, Baumgarth],
  },
  internalAdvisoryCommittee: {
    code: 'internalAdvisoryCommittee',
    displayName: 'Internal Advisory Committee',
    members: [Baines, Balasuriya, Dugas, Kousoulas, Cormier],
  },
  pulmonaryImmunopathologyCore: {
    code: 'pulmonaryImmunopathologyCore',
    displayName: 'Pulmonary Immunopathology Core',
    members: [Dugas, Jeansonne, Langhor, Christofferson],
  },
  molecularBiologyCore: {
    code: 'molecularBiologyCore',
    displayName: 'Molecular Biology Core',
    members: [Kousoulas, Rangasamy, Chouljenko],
  },
  projectInvestigators: {
    code: 'projectInvestigators',
    displayName: 'Project Investigators',
    members: [Patial, Saini, Huang, Fu],
  },
  pilotInvestigators: {
    code: 'pilotInvestigators',
    displayName: 'Pilot Investigators',
    members: [Rangasamy, Noel, Chen, Wen, Carossino,],
  },
};
