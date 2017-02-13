import React from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink, SaveResultsLink } from 'components/button/Button';

import './ResultDetailHeader.scss';

const ResultDetailRow = ({ rows }) => (
  <span>
    {rows.map((row, key) => (
      <div className='dkimResultDetailHeader' key={key}>
        {row.map((value, key) => {
          if (key === 0) {
            return <span className='dkimResultDetailHeader__label' key={key}>{value}</span>;
          }
          return <span className='dkimResultDetailHeader__value' key={key}>{value}</span>;
        })}
      </div>
    ))}
  </span>
);

const ResultDetailHeader = ({ rows, loggedIn }) => (
  <div className='panel panel--accent'>
    <div className='panel__body'>
      <div className='float--right'>
        {!loggedIn && <SaveResultsLink/>}
        <CopyPopover>
          <ActionLink title='Share'>Share</ActionLink>
        </CopyPopover>
      </div>
      <ResultDetailRow rows={rows} />
    </div>
  </div>
);

export default ResultDetailHeader;
