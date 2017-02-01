import React from 'react';
import renderer from 'react-test-renderer';

import GenerateEmail from 'pages/dkim/components/GenerateEmail';

describe('GenerateEmail component', () => {

  const generate = () => {};

  test('should render correctly with a generate function', () => {
    expect(renderer.create(<GenerateEmail generate={generate} />)).toMatchSnapshot();
  });

});
