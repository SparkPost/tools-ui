import React from 'react';
import renderer from 'react-test-renderer';

import ResultDetailHeader from 'pages/dkim/components/ResultDetailHeader';

describe('ResultDetailHeader component', () => {

  const testRows = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    ['cool', 'story', 'bro']
  ];

  test('should render with rows', () => {
    expect(renderer.create(<ResultDetailHeader rows={testRows} />)).toMatchSnapshot();
  });

  test('should render when logged in', () => {
    expect(renderer.create(<ResultDetailHeader rows={testRows} loggedIn={true} />)).toMatchSnapshot();
  });

  test('should render when not logged in', () => {
    expect(renderer.create(<ResultDetailHeader rows={testRows} loggedIn={false} />)).toMatchSnapshot();
  });

});
