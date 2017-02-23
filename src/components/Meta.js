import React from 'react';
import Helmet from 'react-helmet';
import { dkimMeta } from 'pages/dkim/constants';
import { inspectorMeta } from 'pages/spf/constants';
import { builderMeta } from 'pages/builder/constants';
import { baseUrl } from 'helpers/url';

// Meta by url - defined in constants
export const Meta = ({ location: { pathname } }) => {
  let meta = null;

  if (pathname.includes('/dkim')) {
    meta = dkimMeta;
  } else if (pathname.includes('/spf/inspector')) {
    meta = inspectorMeta;
  } else if (pathname.includes('/spf/builder')) {
    meta = builderMeta;
  }
  return meta && <Helmet {...meta} />;
};

// Default / global meta tags - any nested duplicates will override these
const defaultMeta = {
  title: 'SparkPost Tools',
  meta: [
    { name: 'description', content: 'Tools from the email experts at SparkPost make it easy to build and check email authentication settings for your domain.' },
    { property: 'og:title', content: 'SparkPost Tools' },
    { property: 'og:url', content: 'https://tools.sparkpost.com' },
    { property: 'og:image', content: `${baseUrl}/images/tools_og.png` },
    { property: 'og:description', content: 'Tools from the email experts at SparkPost make it easy to build and check email authentication settings for your domain.' },
    { name: 'twitter:title', content: 'SparkPost Tools' },
    { name: 'twitter:image', content: `${baseUrl}/images/tools_twitter.png` },
    { name: 'twitter:description', content: 'Tools from the email experts at SparkPost make it easy to build and check email authentication settings for your domain.' }
  ]
};

export const DefaultMeta = () => <Helmet {...defaultMeta} />;
