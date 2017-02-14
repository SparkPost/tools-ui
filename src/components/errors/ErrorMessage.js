import React, { Component } from 'react';
import Icon from 'components/Icon';

import './ErrorMessage.scss';

/**
 * Produces an error message block
 */
class ErrorMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleDetails() {
    this.setState({
      open: !this.state.open
    });
  }

  renderToggleButton() {
    const { open } = this.state;
    return (
      <a className='errorMessage__link' onClick={() => this.toggleDetails()}>{open ? 'Hide Details' : 'View Details'}</a>
    );
  }

  render() {
    const { icon, friendly, details } = this.props;
    const { open } = this.state;

    return (
      <div className='errorMessage'>
        <div className='errorMessage__text'>
          {icon && <Icon name={icon} />}
          {details && this.renderToggleButton()}
          <p className='errorMessage__friendly'>{friendly}</p>
        </div>

        {(details && open) &&
          <div className='errorMessage__details'>
            {details}
          </div>}
      </div>
    );
  }
}

ErrorMessage.defaultProps = {
  friendly: 'An error occurred',
  details: null,
  icon: 'exclamation-circle'
};

ErrorMessage.propTypes = {
  friendly: React.PropTypes.string,
  details: React.PropTypes.string,
  icon: React.PropTypes.string
};

export default ErrorMessage;
