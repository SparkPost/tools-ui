import React from 'react';
import renderer from 'react-test-renderer';
import NotFound from 'pages/notFound/NotFound';

describe('NotFound', () => {
  test('should render 404', () => {
    // Probably want to mock react-router somehow
    expect(renderer.create(<NotFound/>)).toMatchSnapshot();
  });
});
