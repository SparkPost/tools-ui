import React from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink, SaveResultsLink } from 'components/button/Button';
import config from 'config/index';

import './ResultListHeader.scss';

export default ({ email, getResults, loggedIn }) => (
  <div className='panel panel--accent'>
    <div className='panel__body'>

      <div className='float--right'>
        {!loggedIn && <SaveResultsLink extraQueryParams={config.queryParams.dkim}/>}
        <CopyPopover>
          <ActionLink title='Share' track={true}>Share</ActionLink>
        </CopyPopover>
        <ActionLink onClick={getResults} title='Refresh Messages' track={true}>Refresh</ActionLink>
      </div>

      <p className='dkimResultListHeader__label marginBottom--xs'>Generated Test Address</p>
      <h3 className='dkimResultListHeader__email'>{email}</h3>
    </div>
  </div>
);
