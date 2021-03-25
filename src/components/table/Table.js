import React from 'react';
import './Table.scss';

const Cell = ({ value }) => <td className='table__cell'>{value}</td>;
const HeaderCell = ({ value }) => <th className='table__heading'>{value}</th>;
const Row = ({ values }) => <tr className='table__row'>{values.map((v, i) => <Cell value={v} key={`cell-${i}`} />)}</tr>;

/**
 * Produces a standard table with a header row
 * and n regular rows below
 * Accepts an optional Row component
 */
const Table = ({ headers, rows, RowComponent = Row }) => (
  <table className='table table--transparent'>
    <thead className='table__head'>
      <tr className='table__row'>{headers.map((h, i) => <HeaderCell value={h} key={`header-${i}`} />)}</tr>
    </thead>
    <tbody className='table__body'>
      {rows.map((row, i) => <RowComponent values={row} key={`row-${i}`} />)}
    </tbody>
  </table>
);

/**
 * Produces a table with no header row, but with
 * the first cell in each row being a <th>
 */
const VerticalTable = ({ rows }) => {
  // make the first item of each row a header cell, otherwise a cell
  rows = rows.map((row, i) => (
    <tr className='table__row' key={`row-${i}`}>
      {row.map((value, i) => {
        if (i === 0) {
          return <HeaderCell value={value} key={`cell-${i}`} />;
        }
        return <Cell value={value} key={`cell-${i}`} />;
      })}
    </tr>
  ));
  return (
    <table className='table table--transparent'>
      <tbody className='table__body'>
        {rows}
      </tbody>
    </table>
  );
};


export { VerticalTable, Cell, HeaderCell, Row };
export default Table;
