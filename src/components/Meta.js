import React from 'react';
import Helmet from 'react-helmet';
import { dkimMeta } from 'pages/dkim/constants';
import { inspectorMeta } from 'pages/spf/constants';
import { builderMeta } from 'pages/builder/constants';

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
    { property: 'og:title', content: 'SparkPost Tools' },
    { property: 'og:url', content: 'https://tools.sparkpost.com' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'SparkPost' },
    { property: 'fb:admins', content: '371333539709717' },
    { name: 'twitter:site', content: '@SparkPost' },
    { name: 'twitter:creator', content: '@SparkPost' }
  ]
};

export const DefaultMeta = () => <Helmet {...defaultMeta} />;
