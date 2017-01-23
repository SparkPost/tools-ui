import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from 'components/errors/ErrorMessage';

describe('ErrorMessage component', () => {

  test('should render the default message with no props', () => {
    expect(renderer.create(<ErrorMessage />)).toMatchSnapshot();
  });

  test('should render correctly with an error message', () => {
    expect(renderer.create(<ErrorMessage message='some string message' />)).toMatchSnapshot();
  });

});
