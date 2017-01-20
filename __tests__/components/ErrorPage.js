import React from 'react';
import renderer from 'react-test-renderer';
import ErrorPage from 'pages/error/ErrorPage';

describe('Error page', () => {

  test('should render 404', () => {
    // Probably want to mock react-router somehow
    // This is equivalent to visiting the url - /something
    const mockParams = { 'errorCode': 'something' };
    expect(renderer.create(<ErrorPage params={mockParams}></ErrorPage>)).toMatchSnapshot();
  });

});
