import React from 'react';
import classnames from 'classnames';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink, SaveResultsLink } from 'components/button/Button';

import './ResultDetailHeader.scss';


const ResultDetailRow = ({ rows }) => (
  <span>
    {rows.map((row, key) => (
      <div className='dkimResultDetailHeader' key={key}>
        {row.map((value, key) => {
          const classes = classnames({
            'dkimResultDetailHeader__label': key === 0,
            'dkimResultDetailHeader__value': key !== 0
          });
          return <span key={key} className={classes}>{value}</span>;
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
