import { navigate } from '@reach/router';
import { people } from '../../data/people';

export function createLinks(history) {
  const nameSets = Object.keys(people).map(groupKey => ({
    code: people[groupKey].code,
    displayName: people[groupKey].displayName,
  }));
  return nameSets.map(name => ({
    code: name.code,
    displayName: name.displayName,
    clickHandler: () => {
      history.push(`/${name.code}`);
      navigate(`people/${name.code}`, {
        state: {
          // to pass down people group
          code: name.code,
          displayName: name.displayName,
        },
      });
    },
  }));
}
