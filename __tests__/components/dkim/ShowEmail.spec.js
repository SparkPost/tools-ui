import React from 'react';
import renderer from 'react-test-renderer';

import ShowEmail from 'pages/dkim/components/ShowEmail';

describe('ShowEmail component', () => {

  test('should render', () => {
    expect(renderer.create(<ShowEmail email='some@email.com' />)).toMatchSnapshot();
  });

});
