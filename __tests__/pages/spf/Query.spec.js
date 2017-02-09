import React from 'react';
import renderer from 'react-test-renderer';
import { Query } from 'pages/spf/Query';

describe('Query Snapshots', () => {
  test('baseline snapshot', () => {
    expect(renderer.create(<Query loggedIn={false}></Query>)).toMatchSnapshot();
  });
});
