import React from 'react';
import renderer from 'react-test-renderer';

import Icon from 'components/Icon';

describe('Icon component', () => {

  test('should render correctly with all options', () => {
    expect(renderer.create(<Icon
      name='awesome-icon'
      size='lg'
      extras={['spin', 'big', 'super-special']}
    />)).toMatchSnapshot();
  });

  test('should render correctly with no options', () => {
    const someFunction = () => {};
    expect(renderer.create(<Icon />)).toMatchSnapshot();
  });

});
