import React, { Component } from 'react';
import { CopyPopover } from 'components/popover/Popover';
import { ActionLink } from 'components/button/Button';

import './ResultDetailHeader.scss';

class ResultDetailHeader extends Component {
  constructor(props) {
    super(props);
  }

  renderDetails() {
    const { rows } = this.props;
    return (
      rows.map((row, key) => (
        <div className='dkimResultDetailHeader' key={key}>
          {row.map((value, key) => {
            if (key === 0) {
              return <span className='dkimResultDetailHeader__label' key={key}>{value}</span>;
            }
            return <span className='dkimResultDetailHeader__value' key={key}>{value}</span>;
          })}
        </div>
      ))
    );
  }

  render() {
    return (
      <div className='panel panel--accent'>
        <div className='panel__body'>
          <div className='float--right'>
            <CopyPopover>
              <ActionLink title='Share'>Share</ActionLink>
            </CopyPopover>
          </div>
          {this.renderDetails()}
        </div>
      </div>
    );
  }
}

ResultDetailHeader.defaultProps = {
  loggedIn: false
};

ResultDetailHeader.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired
};

export default ResultDetailHeader;
