import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import Icon from 'components/Icon';
import './Popover.scss';

/**
 * Produces a popover that copies props.stringToCopy to clipboard on click
 */
class CopyPopover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.inputToCopy = null;

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
    this.inputToCopy.select();
    document.execCommand('copy');
    this.inputToCopy.blur();
  }

  render() {
    const { children, placement, stringToCopy, block } = this.props;
    const { open } = this.state;

    const popoverClasses = classNames('popover copyPopover popover--l popover--rightAligned', {
      [`popover--${placement}`]: placement,
      'is-open': open
    });

    const groupClasses = classNames('popover__group', {
      'h-block': block
    });

    return (
      <span className={groupClasses} onClick={() => this.handleShareClick()}>
        {children}
        <div className={popoverClasses}>
          <h6 className='text--left copyPopover__label'><Icon name='check-circle' /> Copied to Clipboard!</h6>
          <p className='copyPopover__copiedString'>{stringToCopy || window.location.href}</p>
          <input className='copyPopover__hidden'
            value={stringToCopy || window.location.href}
            ref={(input) => { this.inputToCopy = input; }} readOnly />
        </div>
      </span>
    );
  }
}

CopyPopover.defaultProps = {
  // Setting window.location.href here does not work
  stringToCopy: null,
  placement: 'bottom',
  block: false
};

CopyPopover.propTypes = {
  children: React.PropTypes.element.isRequired,
  stringToCopy: React.PropTypes.string,
  placement: React.PropTypes.string,
  block: React.PropTypes.bool
};

const HoverPopover = (props) => {
  const { children, placement = 'top', text = '', size = 'm' } = props;
  const popoverClasses = classNames('popover', {
    [`popover--${placement}`]: placement,
    [`popover--${size}`]: size
  });

  return (
    <span className='popover__group popover__hoverTrigger'>
      {children}
      <span className={popoverClasses}>{text}</span>
    </span>
  );
};

export { CopyPopover, HoverPopover };
