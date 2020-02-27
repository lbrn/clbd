import { navigate } from '@reach/router';
import menuLink from '../../../models/menuLink';

export function createLinks(history): menuLink[] {
  return [
    {
      clickHandler: () => {
        navigate('/resources/nih');
        history.push('/resources/nih');
      },
      code: 'nih',
      displayName: 'NIH Acknowledgement',
    },
    {
      clickHandler: () => {
        navigate('/resources/disclaimer');
        history.push('/resources/disclaimer');
      },
      code: 'disclaimer',
      displayName: 'Disclaimer',
    },
    {
      clickHandler: () => {
        navigate('/resources/useful-links');
        history.push('resources/useful-links');
      },
      code: 'useful-links',
      displayName: 'Useful Links',
    },
    {
      clickHandler: () => {
        navigate('/resources/articles');
        history.push('resources/articles');
      },
      code: 'articles',
      displayName: 'Articles',
    },
    {
      clickHandler: () => {
        navigate('/resources/pulmonary-core');
        history.push('/resources/pulmonary-core');
      },
      code: 'pulmonary-core',
      displayName: 'Pulmonary Immunopathology Core',
    },
    {
      clickHandler: () => {
        // setActive('molecular-core');
        navigate('/resources/molecular-core');
        history.push('/resources/molecular-core');
      },
      code: 'molecular-core',
      displayName: 'Molecular Biology Core ',
    },
  ];
}
