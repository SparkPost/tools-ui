import React from 'react';
import renderer from 'react-test-renderer';

import { TextInput, UseDefault, Hosts } from 'pages/builder/components/FormElements';

describe('TextInput component', () => {
  const meta = {
    touched: false,
    error: 'Error Message'
  };

  test('should render correctly with all props', () => {
    expect(renderer.create(<TextInput prefix='prefix' extraClasses='a class' placeholder='a placeholder' meta={meta} />)).toMatchSnapshot();
  });
});
