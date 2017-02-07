import React from 'react';
import renderer from 'react-test-renderer';

import { TextInput, UseDefault, Hosts } from 'pages/builder/components/FormElements';

describe('Hosts component', () => {
  test('should render correctly with no Hosts', () => {
    expect(renderer.create(<Hosts fields={[]} />)).toMatchSnapshot();
  });
});

describe('TextInput component', () => {
  const meta = {
    touched: false,
    error: 'Error Message'
  };

  test('should render correctly with all props', () => {
    expect(renderer.create(<TextInput prefix='prefix' extraClasses='a class' placeholder='a placeholder' meta={meta} />)).toMatchSnapshot();
  });
});

describe('UseDefault component', () => {
  test('should render correctly when default turned on', () => {
    expect(renderer.create(<UseDefault input={{value: true}} domain='test.com' />)).toMatchSnapshot();
  });

  test('should render correctly when default turned off', () => {
    expect(renderer.create(<UseDefault input={{value: false}} domain='test.com' />)).toMatchSnapshot();
  });
});
