import React from 'react';
import renderer from 'react-test-renderer';

import { CopyPopover } from 'components/popover/Popover';
import { ActionLink } from 'components/button/Button';

describe('CopyPopover component', () => {

  test('should render with only children prop', () => {
    expect(renderer.create(<CopyPopover><ActionLink>Click me!</ActionLink></CopyPopover>)).toMatchSnapshot();
  });

  test('should render when supplied a string to copy', () => {
    expect(renderer.create(<CopyPopover stringToCopy='Copy me!'><ActionLink>Click me!</ActionLink></CopyPopover>)).toMatchSnapshot();
  });

  test('should render when supplied a string to copy and styling props', () => {
    expect(renderer.create(<CopyPopover stringToCopy='Copy me!' block={true} placement='top'><ActionLink>Click me!</ActionLink></CopyPopover>)).toMatchSnapshot();
  });

});
