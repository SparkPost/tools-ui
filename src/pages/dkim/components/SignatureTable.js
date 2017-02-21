import React from 'react';
import { Cell } from 'components/table/Table';

import './SignatureTable.scss';

const StatusCell = ({ value, error }) => {
  const type = value === 'Passed' ? 'is-valid' : 'has-error';
  return (
    <td className='table__cell sigTable__statusCell'>
      <span className={`text--semibold ${type}`}>{value}</span>
      {error && <div className='sigTable__error text--small'>{error}</div>}
    </td>
  );
};

const Row = ({ values }) => {
  const error = values.pop();
  return (
    <tr className={`table__row ${error ? 'sigTable__row--error' : ''}`}>{values.map((v, i) => {
      if (i === 0) {
        return <StatusCell value={v} error={error} key={`cell-${i}`} />;
      }
      return <Cell value={v} key={`cell-${i}`} />;
    })}</tr>
  );
};

export { Row };
