import React from 'react';
import Icon from 'components/Icon';

export const supportUrl = 'https://www.sparkpost.com/email-tools/errors';

export const SupportLink = ({ code, title = 'SPF and DKIM Errors' }) => {
  // Check if code ends with -0
  // These are unknown errors and won't be documented in support articles
  if (/.*-0$/.test(code)) {
    return null;
  }

  const url = `${supportUrl}/#${code}`;

  const handleClick = (e) => {
    e.preventDefault();
    const win = window.open(url, 'SparkpostToolsErrors');
    win.focus();
  };

  return <a href={url} onClick={handleClick} title={title}>Learn more <Icon name='external-link-square'/></a>;
};
