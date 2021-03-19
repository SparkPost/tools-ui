import React from 'react';
import renderer from 'react-test-renderer';
import { QueryPage } from 'pages/spf/QueryPage';

describe('QueryPage Snapshots', () => {
  test('baseline snapshot', () => {
    expect(renderer.create(<QueryPage loggedIn={false}></QueryPage>)).toMatchSnapshot();
  });
});
