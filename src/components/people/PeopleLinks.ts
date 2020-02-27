import { navigate } from '@reach/router';
import { people } from '../../data/people';

export function createLinks(history) {
  const mainPeopleList = people && Object.keys(people);

  return mainPeopleList.map(code => ({
    code: code,
    clickHandler: () => {
      history.push('/people');
      navigate('people', {
        state: {
          // to pass down people group
          code: code,
        },
      });
    },
    displayName: people[code].displayName,
  }));
}
