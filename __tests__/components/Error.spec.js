import React from 'react';
import renderer from 'react-test-renderer';

import ErrorMessage from 'components/errors/ErrorMessage';

describe('ErrorMessage component', () => {

  test('should render the default message with no props', () => {
    expect(renderer.create(<ErrorMessage />)).toMatchSnapshot();
  });

  test('should render correctly with a supplied icon', () => {
    expect(renderer.create(<ErrorMessage icon='fa-bolt' />)).toMatchSnapshot();
  });

  test('should render correctly with an error message', () => {
    expect(renderer.create(<ErrorMessage friendly='some string message' />)).toMatchSnapshot();
  });

  test('should render correctly with an error message and details', () => {
    expect(renderer.create(<ErrorMessage friendly='some string message' details='extra details' />)).toMatchSnapshot();
  });

});
