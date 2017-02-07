import React from 'react';
import renderer from 'react-test-renderer';

import { Nav } from 'components/nav/Nav';

describe('Nav component', () => {

  let location, logout;

  beforeEach(() => {
    location = {
      pathname: '/some/path',
      search: '?maybe=something'
    };
    logout = () => 'logout';
  });

  test('should render correctly by default', () => {
    expect(renderer.create(<Nav location={location} logout={logout} />)).toMatchSnapshot();
  });

  test('should render correctly when logged in', () => {
    expect(renderer.create(<Nav loggedIn={true} location={location} logout={logout} />)).toMatchSnapshot();
  });

  test('should render correctly when not logged in', () => {
    expect(renderer.create(<Nav loggedIn={false} location={location} logout={logout} />)).toMatchSnapshot();
  });

  test('should render correctly with a dkim path', () => {
    location = { ...location, pathname: '/dkim/path' };
    expect(renderer.create(<Nav location={location} logout={logout} />)).toMatchSnapshot();
  });

  test('should render correctly with an inspector path', () => {
    location = { ...location, pathname: '/spf/inspector' };
    expect(renderer.create(<Nav location={location} logout={logout} />)).toMatchSnapshot();
  });

  test('should render correctly with a builder path', () => {
    location = { ...location, pathname: '/spf/builder' };
    expect(renderer.create(<Nav location={location} logout={logout} />)).toMatchSnapshot();
  });

});
