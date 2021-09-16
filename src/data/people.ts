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
  Mehra,
} = peopleData;

interface peopleGroup {
  displayName: string;
  code: string;
  members: person[];
  prev: person[];
}

interface people {
  [key: string]: peopleGroup;
}

export const people: people = {
  leadership: {
    code: 'leadership',
    displayName: 'Leadership',
    members: [Jeyaseelan, Cardin, Le, White],
    prev: [],

  },
  externalAdvisoryCommittee: {
    code: 'externalAdvisoryCommittee',
    displayName: 'External Advisory Committee',
    members: [Irvin, Stanton, Fessler, Baumgarth],
    prev: [],

  },
  internalAdvisoryCommittee: {
    code: 'internalAdvisoryCommittee',
    displayName: 'Internal Advisory Committee',
    members: [Baines, Balasuriya, Dugas, Kousoulas, Cormier],
    prev: [],

  },
  pulmonaryImmunopathologyCore: {
    code: 'pulmonaryImmunopathologyCore',
    displayName: 'Pulmonary Immunopathology Core',
    members: [Dugas, Jeansonne, Langhor, Wen,],
    prev: [],

  },
  molecularBiologyCore: {
    code: 'molecularBiologyCore',
    displayName: 'Molecular Biology Core',
    members: [Kousoulas, Rangasamy, Chouljenko],
    prev: [],

  },
  projectInvestigators: {
    code: 'projectInvestigators',
    displayName: 'Project Investigators',
    members: [Patial, Saini, Huang, Fu],
    prev: [Noel, Mehra,],

  },
  pilotInvestigators: {
    code: 'pilotInvestigators',
    displayName: 'Pilot Investigators',
    members: [Rangasamy, Noel, Chen, Carossino,],
    prev:[Fu, Rangasamy, Yoshimmura, GuerreroPlata, Ogundele,],
  },
};
