import React from 'react';
import { ActionLink } from 'components/button/Button';
import { CopyPopover } from 'components/popover/Popover';
import buildRecord from 'helpers/spfBuilder';

const Record = (props) => {

  const record = buildRecord(props);

  return (
    <div className='col-xs-12 col-md-9'>
      <div className='panel panel--accent'>
        <div className='panel__body'>
          <div className='float--right'>
            <CopyPopover stringToCopy={record}><ActionLink>Copy</ActionLink></CopyPopover>
          </div>
          <h4 className='marginBottom--xs'>Go to your DNS Provider and Add this TXT Record</h4>
          <code className='marginBottom--xs'>{record}</code>
          <p>Once added to your DNS, inspect your SPF record to make sure it is valid.</p>
        </div>
      </div>
    </div>
  );
};

export default Record;
