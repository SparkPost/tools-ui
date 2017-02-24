import React from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink, SaveResultsLink } from 'components/button/Button';
import Icon from 'components/Icon';

import './ResultDetailHeader.scss';

const HeaderRow = ({ rows }) => (
  <span>
    {rows.map((row, key) => (
      <div className='dkimResultDetailHeader' key={key}>
        {row.map((value, key) => {
          const type = key === 0 ? 'label' : 'value';
          return <span key={key} className={`dkimResultDetailHeader__${type}`}>{value}</span>;
        })}
      </div>
    ))}
  </span>
);

const HeaderStatus = ({ status }) => {
  const icon = status === 'Passed' ? 'check-circle' : 'exclamation-circle';
  const type = status === 'Passed' ? 'is-valid' : 'has-error';
  return (
    <div className='panel__body'>
      <span className='dkimResultDetailHeader__label'>status</span>
      <span className={`dkimResultDetailHeader__value ${type}`}><Icon name={icon}/> {status}</span>
    </div>
  );
};

const ResultDetailHeader = ({ rows, loggedIn, status, error }) => (
  <div className='panel panel--accent'>
    <div className='panel__body'>
      <div className='float--right'>
        {!loggedIn && <SaveResultsLink/>}
        <CopyPopover>
          <ActionLink title='Share' track={true}>Share</ActionLink>
        </CopyPopover>
      </div>
      <HeaderRow rows={rows} />
    </div>
    <HeaderStatus status={status} error={error} />
  </div>
);

export default ResultDetailHeader;
