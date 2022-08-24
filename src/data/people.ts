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
// console.log('dog');
// for (let i = 0; i < peopleData.length; i++) {
//   const element = array[i];
//   console.log(peopleData);
//
// }
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
  Rangasamy2,
  Reed,
  Saini,
  Stanton,
  White,
  Yoshimmura,
  Jeansonne,
  Balasuriya,
  Fu,
  Chen,
  Chen2,
  Wen,
  Carossino,
  Mehra,
  Hoang,
  Steele,
  Lund,
  Varga,
  Jaspers,
  Pinkerton,
  Garden,
  Francis,
  Leise,
  Vicente,
  Beavers,
  Abuaita,
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
    members: [Jeyaseelan, Hoang, Dugas],
    prev: [],

  },
  externalAdvisoryCommittee: {
    code: 'externalAdvisoryCommittee',
    displayName: 'External Advisory Committee',
    members: [Steele, Lund, Varga, Jaspers, Pinkerton],
    prev: [],

  },
  internalAdvisoryCommittee: {
    code: 'internalAdvisoryCommittee',
    displayName: 'Internal Advisory Committee',
    members: [Garden, Francis, Leise, Vicente, Balasuriya, Kousoulas, Cormier],
    prev: [],

  },
  pulmonaryImmunopathologyCore: {
    code: 'pulmonaryImmunopathologyCore',
    displayName: 'Pulmonary Immunopathology Core',
    members: [Saini, Jeansonne, Wen],
    prev: [],

  },
  molecularBiologyCore: {
    code: 'molecularBiologyCore',
    displayName: 'Molecular Biology Core',
    members: [Kousoulas, Rangasamy2, Chouljenko],
    prev: [],

  },
  projectInvestigators: {
    code: 'projectInvestigators',
    displayName: 'Project Investigators',
    members: [Patial, Chen2, Abuaita],
    prev: [Fu, Huang, Saini,  Noel, Mehra],

  },
  pilotInvestigators: {
    code: 'pilotInvestigators',
    displayName: 'Pilot Investigators',
    members: [],
    prev:[Rangasamy, Chen, Carossino, Fu, Noel, Rangasamy2, Yoshimmura, GuerreroPlata, Ogundele],
  },
};
