import { navigate } from '@reach/router';

export function createLinks(history) {
  return [
    {
      clickHandler: () => {
        // setActive('nih');
        navigate('/resources/nih');
        history.push('/resources/nih');
      },
      code: 'nih',
      displayName: 'NIH Acknowledgement',
    },
    {
      clickHandler: () => {
        // setActive('disclaimer');
        navigate('/resources/disclaimer');
        history.push('/resources/disclaimer');
      },
      code: 'disclaimer',
      displayName: 'Disclaimer',
    },
    {
      clickHandler: () => {
        // setActive('useful-links');
        navigate('/resources/useful-links');
        history.push('resources/useful-links');
      },
      code: 'useful-links',
      displayName: 'Useful Links',
    },
    {
      clickHandler: () => {
        // setActive('articles');
        navigate('/resources/articles');
        history.push('resources/articles');
      },
      code: 'articles',
      displayName: 'Articles',
    },
    {
      clickHandler: () => {
        // setActive('pulmonary-core');
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
