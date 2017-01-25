import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from 'components/Icon';
import './Popover.scss';

/**
 * Produces a popover that copies url to clipboard on click
 */
class CopyPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    // Cannot use an arrow function in this case or it will not unmount
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(e) {
    const domNode = ReactDOM.findDOMNode(this);
    if ((!domNode || !domNode.contains(e.target))) {
      this.setState({ open: false });
    }
  }

  handleShareClick() {
    this.setState({ open: true });

    // TODO We advise against it because string refs have some issues, are considered legacy, and are likely to be removed in one of the future releases. https://facebook.github.io/react/docs/refs-and-the-dom.html
    this.refs.stringToCopy.select();

    document.execCommand('copy');
    this.refs.stringToCopy.blur();
  }

  render() {
    const { children, placement, stringToCopy } = this.props;
    const { open } = this.state;
    const classes = classNames('popover copyPopover popover--l popover--rightAligned', {
      [`popover--${placement}`]: placement,
      'is-open': open
    });

    return (
      <span className="popover__group" onClick={() => this.handleShareClick()}>
        {children}
        <div className={classes}>
          <h6 className='text--left copyPopover__label'><Icon name='check-circle' /> Copied to Clipboard!</h6>
          <input className='input__text input__text--s copyPopover__input'
            value={stringToCopy}
            ref='stringToCopy' readOnly />
        </div>
      </span>
    );
  }
}

CopyPopover.defaultProps = {
  stringToCopy: window.location.href,
  placement: 'bottom'
};

CopyPopover.propTypes = {
  stringToCopy: React.PropTypes.string,
  placement: React.PropTypes.string
};

export { CopyPopover };
