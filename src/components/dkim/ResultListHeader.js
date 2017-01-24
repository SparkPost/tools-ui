import React, { Component } from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink } from 'components/button/Button';
import ErrorMessage from 'components/errors/ErrorMessage';

import './ResultListHeader.scss';

class ResultListHeader extends Component {
  render() {
    const { email, getResults, error } = this.props;

    return (
      <div className='panel panel--accent'>
        <div className='panel__body'>

          <div className='float--right'>
            <CopyPopover>
              <ActionLink title='Share'>Share</ActionLink>
            </CopyPopover>
            <ActionLink onClick={getResults} title='Refresh Messages'>Refresh</ActionLink>
          </div>

          <p className='dkimResultListHeader__label marginBottom--xs'>Generated Test Address</p>
          <h3 className='dkimResultListHeader__email'>{email}</h3>

          <ErrorMessage error={error} />
        </div>
      </div>
    );
  }
}

ResultListHeader.defaultProps = {
  loggedIn: false
};

ResultListHeader.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};

export default ResultListHeader;
