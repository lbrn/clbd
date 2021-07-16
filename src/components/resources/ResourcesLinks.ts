import { navigate } from '@reach/router';

export function createLinks(history) {
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
        history.push('/resources/useful-links');
      },
      code: 'useful-links',
      displayName: 'Useful Links',
    },
    {
      clickHandler: () => {
        navigate('/resources/articles');
        history.push('/resources/articles');
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
        navigate('/resources/molecular-core');
        history.push('/resources/molecular-core');
      },
      code: 'molecular-core',
      displayName: 'Molecular Biology Core ',
    },
    {
      clickHandler: () => {
        navigate('/resources/media');
        history.push('/resources/media');
      },
      code: 'media',
      displayName: 'Media',
    },
  ];
}
