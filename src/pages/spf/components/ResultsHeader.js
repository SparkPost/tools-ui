import React from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink, SaveResultsLink } from 'components/button/Button';
import classNames from 'classnames';

export default (props) => {
  const { domain, timestamp, authorized_netblocks, dns_lookups, refresh, loggedIn } = props;
  const timeClasses = classNames('text--muted', 'marginBottom--none', { 'h-hide': !timestamp });
  const info = (typeof authorized_netblocks === 'number' && typeof dns_lookups === 'number') ? (
    <div className='panel__body'>
      <div className="flex">
        <div className="col-xs-3">
          <b>{authorized_netblocks}</b> Authorized Netblocks
        </div>
        <div className="col-xs-3">
          <b>{dns_lookups}</b> DNS Lookups
        </div>
      </div>
    </div>
  ) : null;

  return (
    <div>
      <div className='panel panel--accent'>

        {/*  Top section */}
        <div className='panel__body'>
          <div className='float--right'>
            {!loggedIn && <SaveResultsLink/>}
            <CopyPopover><ActionLink title='Share'>Share</ActionLink></CopyPopover>
            <ActionLink onClick={refresh} title='Refresh'>Refresh</ActionLink>
            </div>
          <h1 className='marginBottom--none marginTop--xs'>{domain}</h1>
          <p className={timeClasses}>Tested on {timestamp}</p>
        </div>

        {/*  Info section */}
        {info}

      </div>
    </div>
  );
};
