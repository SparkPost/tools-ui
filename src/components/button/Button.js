import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Icon from 'components/Icon';
import { HoverPopover } from 'components/popover/Popover';
import { getLoginUrl, getSignUpUrl } from 'helpers/url';
import classNames from 'classnames';
const noop = () => {};

import './Button.scss';

const mapPropsToClasses = ({ type, size, accent, fullWidth, icon, states, extraClasses }) => (
  classNames('button', {
    [`button--${type}`]: type,
    [`button--${size}`]: size,
    [`button--${accent}Accent`]: accent,
    'button--full': fullWidth,
    'button--icon': icon
  }, states, extraClasses)
);

const DetachedButton = (props) => {
  const { to = null, action = noop, children } = props;
  const classes = mapPropsToClasses(props);
  const handleClick = () => {
    action && action();
  };

  if (!to) {
    return <button onClick={handleClick} className={classes}>{children}</button>;
  }

  return <Link to={to} onClick={handleClick} className={classes}>{children}</Link>;
};
const Button = connect(null, { })(DetachedButton);

/**
 * Produces an orange link
 * Can be used to link or execute an action
 */
const DetachedActionLink = (props) => {
  const { to = null, external = null, onClick = null, title = '', target = '_self', children } = props;
  const handleClick = () => {
    onClick && onClick();
  };

  if (external) {
    return <a href={external} onClick={handleClick} className='actionLink' title={title} target={target}>{children}</a>;
  }

  return <Link to={to} onClick={handleClick} className='actionLink' title={title}>{children}</Link>;
};
const ActionLink = connect(null, { })(DetachedActionLink);

/**
 * Produces a blue link to indicate browser back
 */
const BackLink = ({ to = null, title = '' }) => <Link to={to} className='backLink' title={title}><Icon name='chevron-left' /> Back</Link>;

/**
 * Produces a Save Results action link
 */
const SaveResultsLink = ({ extraQueryParams }) => (
  <HoverPopover placement='top' size='m' text='Create a free SparkPost account or login into your account to save results'>
    <ActionLink external={getSignUpUrl(extraQueryParams)} className='actionLink' title='Save Results' track={true}>Save Results</ActionLink>
  </HoverPopover>
);

const DetachedSpLoginLink = ({ classes, children }) => {
  const linkClasses = classNames('sp-sign-in', classes);
  return (
    <a href={getLoginUrl()} title='Login' className={linkClasses}>{children}</a>
  );
};
const SpLoginLink = connect(null, { })(DetachedSpLoginLink);

const DetachedSpSignUpLink = ({ classes, children }) => {
  const linkClasses = classNames('sp-sign-up', classes);
  return (
    <a href={getSignUpUrl()} title='Sign Up' className={linkClasses}>{children}</a>
  );
};
const SpSignUpLink = connect(null, { })(DetachedSpSignUpLink);

export { Button, ActionLink, BackLink, SpLoginLink, SpSignUpLink, SaveResultsLink,
  DetachedButton, DetachedActionLink, DetachedSpLoginLink, DetachedSpSignUpLink };
