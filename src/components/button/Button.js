import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { trackButtonClick } from 'actions/mixpanel';
import Icon from 'components/Icon';
import { HoverPopover } from 'components/popover/Popover';
import config from 'config/index';
import { getEncodedUrl, getQueryParams } from 'helpers/url';
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

const getLoginSignUpQueryParams = (location) => (
  `return=${getEncodedUrl(location)}&${getQueryParams(location)}`
);

const DetachedButton = (props) => {
  const { to = null, action = noop, children, track = false } = props;
  const classes = mapPropsToClasses(props);
  const handleClick = () => {
    action && action();
    track && trackButtonClick(children, 'Button');
  };
  return <Link to={to} onClick={handleClick} className={classes}>{children}</Link>;
};
const Button = connect(null, { trackButtonClick })(DetachedButton);

/**
 * Produces an orange link
 * Can be used to link or execute an action
 */
const DetachedActionLink = (props) => {
  const { to = null, external = null, onClick = null, title = '', track = false, children, trackButtonClick } = props;
  const handleClick = () => {
    !external && onClick && onClick();
    track && trackButtonClick(title, 'ActionLink');
  };

  if (external) {
    return <a href={external} onClick={handleClick} className='actionLink' title={title}>{children}</a>;
  }

  return <Link to={to} onClick={handleClick} className='actionLink' title={title}>{children}</Link>;
};
const ActionLink = connect(null, { trackButtonClick })(DetachedActionLink);

/**
 * Produces a blue link to indicate browser back
 */
const BackLink = ({ to = null, title = '' }) => <Link to={to} className='backLink' title={title}><Icon name='chevron-left' /> Back</Link>;

/**
 * Produces a Save Results action link
 */
const SaveResultsLink = () => (
  <HoverPopover placement='top' size='m' text='Create a free SparkPost account or login into your account to save results'>
    <ActionLink external={`${config.appUrl}/sign-up?${getLoginSignUpQueryParams(location)}`} className='actionLink' title='Save Results' track={true}>Save Results</ActionLink>
  </HoverPopover>
);

const DetachedSpLoginLink = ({ location = {}, classes, children, trackButtonClick }) => {
  const linkClasses = classNames('sp-sign-in', classes);
  const handleClick = () => trackButtonClick('Login', 'SpLoginLink');
  return (
    <a href={`${config.appUrl}/auth?${getLoginSignUpQueryParams(location)}`} onClick={handleClick} title='Login' className={linkClasses}>{children}</a>
  );
};
const SpLoginLink = connect(null, { trackButtonClick })(DetachedSpLoginLink);

const DetachedSpSignUpLink = ({ location = {}, classes, children, trackButtonClick }) => {
  const linkClasses = classNames('sp-sign-up', classes);
  const handleClick = () => trackButtonClick('Sign Up', 'SpSignUpLink');
  return (
    <a href={`${config.appUrl}/sign-up?${getLoginSignUpQueryParams(location)}`} onClick={handleClick} title='Sign Up' className={linkClasses}>{children}</a>
  );
};
const SpSignUpLink = connect(null, { trackButtonClick })(DetachedSpSignUpLink);

export { Button, ActionLink, BackLink, SpLoginLink, SpSignUpLink, SaveResultsLink,
  DetachedButton, DetachedActionLink, DetachedSpLoginLink, DetachedSpSignUpLink };
