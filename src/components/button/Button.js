import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/Icon';
import { HoverPopover } from 'components/popover/Popover';
import config from 'config/index';
import getCurrentUrl from 'helpers/getCurrentUrl';
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

const ActionButton = (props) => {
  const { action = noop, children } = props;
  const classes = mapPropsToClasses(props);

  return (
    <button onClick={action} className={classes}>
      {children}
    </button>
  );
};

const LinkButton = (props) => {
  const { to = null, children } = props;
  const classes = mapPropsToClasses(props);

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
};

/**
 * Produces an orange link
 * Can be used to link or execute an action
 */
const ActionLink = (props) => {
  const { to = null, external = null, onClick = null, title = '', children } = props;

  if (external) {
    return <a href={external} className='actionLink' title={title}>{children}</a>;
  }

  return <Link to={to} onClick={onClick} className='actionLink' title={title}>{children}</Link>;
};

/**
 * Produces a blue link to indicate browser back
 */
const BackLink = ({ to = null, title = '' }) => <Link to={to} className='backLink' title={title}><Icon name='chevron-left' /> Back</Link>;

/**
 * Produces a Save Results action link
 */
const SaveResultsLink = () => {
  const currentUrl = getCurrentUrl(location);
  return (
    <HoverPopover placement='top' size='m' text='Create a free SparkPost account or login into your account to save results'>
      <ActionLink external={`${config.appUrl}/sign-up?return=${currentUrl}`} className='actionLink' title='Save Results'>Save Results</ActionLink>
    </HoverPopover>
  );
};

const SpLoginLink = ({ location = {}, classes, children }) => {
  const currentUrl = getCurrentUrl(location);
  const linkClasses = classNames('sp-sign-in', classes);
  return (
    <a href={`${config.appUrl}/auth?return=${currentUrl}`} title='Login' className={linkClasses}>{children}</a>
  );
};

const SpSignUpLink = ({ location = {}, classes, children }) => {
  const currentUrl = getCurrentUrl(location);
  const linkClasses = classNames('sp-sign-up', classes);
  return (
    <a href={`${config.appUrl}/sign-up?return=${currentUrl}&src=SP-Tools`} title='Sign Up' className={linkClasses}>{children}</a>
  );
};

export { ActionButton, LinkButton, ActionLink, BackLink, SpLoginLink, SpSignUpLink, SaveResultsLink };
