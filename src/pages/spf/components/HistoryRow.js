import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/Icon';
import classNames from 'classnames';

import './HistoryRow.scss';

export default (props) => {
  const { domain, timestamp, status } = props;

  const renderStatus = (status) => {
    let iconCls = '';
    switch (status) {
      case 'valid':
        iconCls = 'check-circle';
        break;
      case 'warning':
        iconCls = 'exclamation-circle';
        break;
      case 'error':
        iconCls = 'exclamation-triangle';
        break;
    }
    return <Icon name={iconCls} />;
  };

  const iconClasses = classNames('spf-historyRow__status', {
    [`has-${status}`]: status
  });

  return (
    <Link to={`/spf/inspector/results/${domain}`} className='spf-historyRow'>
      <div className='panel marginBottom--none'>
        <div className='panel__body'>
          <div className={iconClasses}>{renderStatus(status)}</div>
          <div className='spf-historyRow__details'>
            <h5 className='spf-historyRow__domain'>{domain}</h5>
            <p className='spf-historyRow__timestamp'>Tested on {timestamp}</p>
          </div>
          <div className='spf-historyRow__action'>Refresh<Icon name='chevron-right' /></div>
        </div>
      </div>
    </Link>
  );
};
