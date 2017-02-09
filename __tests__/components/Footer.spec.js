import React from 'react';
import renderer from 'react-test-renderer';

import { Footer } from 'components/footer/Footer';

test('Footer component should render correctly', () => {
  expect(renderer.create(<Footer />)).toMatchSnapshot();
});
