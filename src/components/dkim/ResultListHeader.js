import React, { Component } from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink } from 'components/button/Button';

class ResultListHeader extends Component {
  render() {
    const { email, getResults } = this.props;

    return (
      <div className='panel panel--accent'>
        <div className='panel__body'>

          <div className='float--right'>
            <CopyPopover>
              <ActionLink title='Share'>Share</ActionLink>
            </CopyPopover>
            <ActionLink onClick={getResults} title='Refresh Messages'>Refresh</ActionLink>
          </div>

          <p className='text--muted marginBottom--xs'>Generated Test Address</p>
          <h3>{email}</h3>
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
