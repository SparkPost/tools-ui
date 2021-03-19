import React from 'react';
import renderer from 'react-test-renderer';

import { SupportLink } from 'components/SupportLink';

describe('SupportLink component', () => {

  test('should render with a code', () => {
    expect(renderer.create(<SupportLink code='some-error-10' />)).toMatchSnapshot();
  });

  test('should not render with a code ending in -0', () => {
    expect(renderer.create(<SupportLink code='some-error-0' />)).toMatchSnapshot();
  });
});
