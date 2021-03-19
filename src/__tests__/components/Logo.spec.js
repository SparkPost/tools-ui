import React from 'react';
import renderer from 'react-test-renderer';

import { Logo } from 'components/logo/Logo';

test('Logo component should render correctly', () => {
  expect(renderer.create(<Logo />)).toMatchSnapshot();
});
