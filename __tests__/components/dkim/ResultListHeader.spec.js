import React from 'react';
import renderer from 'react-test-renderer';

import ResultListHeader from 'pages/dkim/components/ResultListHeader';

describe('ResultListHeader component', () => {

  const getResults = () => {}

  test('should render', () => {
    expect(renderer.create(<ResultListHeader getResults={getResults} email='some@email.com' />)).toMatchSnapshot();
  });

  test('should render with an error present', () => {
    expect(renderer.create(<ResultListHeader getResults={getResults} email='some@email.com' error={new Error('oops')} />)).toMatchSnapshot();
  })

  test('should render when logged in', () => {
    expect(renderer.create(<ResultListHeader getResults={getResults} email='some@email.com' loggedIn={true} />)).toMatchSnapshot();
  });

  test('should render when not logged in', () => {
    expect(renderer.create(<ResultListHeader getResults={getResults} email='some@email.com' loggedIn={false} />)).toMatchSnapshot();
  });

});
