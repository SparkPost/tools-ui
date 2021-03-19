import React from 'react';
import renderer from 'react-test-renderer';

import {
  BackLink,
  DetachedButton as Button,
  DetachedActionLink as ActionLink,
  DetachedSpLoginLink as SpLoginLink,
  DetachedSpSignUpLink as SpSignUpLink } from 'components/button/Button';

describe('snapshot tests', () => {
  test('Button will render correctly with all options', () => {
    const someFunction = () => {};
    expect(renderer.create(<Button
      action={someFunction}
      type='muted'
      size='l'
      fullWidth
      icon
      accent='magenta'
      states={['is-disabled', 'is-awesome']}
      extraClasses={['has-error', 'best-button-ever']}
    >This is an action button</Button>)).toMatchSnapshot();
  });

  test('Button will render correctly with no options', () => {
    const someFunction = () => {};
    expect(renderer.create(<Button>ACTION</Button>)).toMatchSnapshot();
  });

  test('Button will render a Link with a url', () => {
    const someFunction = () => {};
    expect(renderer.create(<Button to='a url'>ACTION</Button>)).toMatchSnapshot();
  });

  test('ActionLink will render correctly with all options', () => {
    expect(renderer.create(<ActionLink
      to='some/route'
      onClick={() => 'something'}
      title='a title'
    >Action link text</ActionLink>)).toMatchSnapshot();
  });

  test('ActionLink will render correctly with no options', () => {
    expect(renderer.create(<ActionLink />)).toMatchSnapshot();
  });

  test('BackLink will render correctly with all options', () => {
    expect(renderer.create(<BackLink
      to='some/route'
      title='a title'
    >Back link text</BackLink>)).toMatchSnapshot();

  });

  test('BackLink will render correctly with no options', () => {
    expect(renderer.create(<BackLink />)).toMatchSnapshot();
  });

  test('SpLoginLink will render correctly with all options', () => {
    expect(renderer.create(<SpLoginLink
      classes='a-list of-classes'
    >Log In</SpLoginLink>)).toMatchSnapshot();
  });

  test('SpLoginLink will render correctly with no options', () => {
    expect(renderer.create(<SpLoginLink />)).toMatchSnapshot();
  });

  test('SpSignUpLink will render correctly with all options', () => {
    expect(renderer.create(<SpSignUpLink
      classes='a-list of-classes'
    >Sign Up</SpSignUpLink>)).toMatchSnapshot();
  });

  test('SpSignUpLink will render correctly with no options', () => {
    expect(renderer.create(<SpSignUpLink />)).toMatchSnapshot();
  });

});
