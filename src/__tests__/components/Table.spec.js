import React from 'react';
import renderer from 'react-test-renderer';
import Table, { VerticalTable } from 'components/table/Table';

const testHeaders = ['One', 'Second Column', 'Three'];
const testRows = [
  ['a', 'b', 'c'],
  [1, 2, 3],
  ['la', 'dee', 'da']
];

test('Table component should render correctly', () => {
  expect(renderer.create(<Table
    headers={testHeaders}
    rows={testRows}
  />)).toMatchSnapshot();
});

test('Vertical table component should render correctly', () => {
  expect(renderer.create(<VerticalTable
    rows={testRows}
  />)).toMatchSnapshot();
});
