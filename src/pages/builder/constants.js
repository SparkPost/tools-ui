import { baseUrl } from 'helpers/getCurrentUrl';

export const INTRO_TEXT = 'Create a Sender Policy Framework record for your domain.';

export const initialValues = {
  mx: {
    useDefault: true,
    hosts: []
  },
  a: {
    useDefault: true,
    hosts: []
  },
  ip: [],
  include: [],
  all: 'Fail'
};

export const ALL_TEXT = {
  'Fail': 'Non-compliant email will not be accepted.',
  'Soft Fail': 'Non-compliant email will be accepted but marked or tagged as non-compliant.'
};

export const builderMeta = {
  title: 'SPF Builder',
  meta: [
    {
      name: 'description',
      content: 'SPF email authentication is important, but hard to grok. This tool from the experts at SparkPost makes it easy to build SPF rules for sending from your domain.'
    },
    // Og
    {
      property: 'og:title',
      content: 'SPF Builder'
    },
    {
      property: 'og:url',
      content: 'https://tools.sparkpost.com/spf/builder'
    },
    {
      property: 'og:description',
      content: 'SPF email authentication is important, but hard to grok. This tool from the experts at SparkPost makes it easy to build SPF rules for sending from your domain.'
    },
    {
      property: 'og:image',
      content: `${baseUrl}/images/builder_og.png`
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'SPF Builder'
    },
    {
      name: 'twitter:description',
      content: 'SPF email authentication is important, but hard to grok. This tool from the experts at SparkPost makes it easy to build SPF rules for sending from your domain.'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: `${baseUrl}/images/builder_twitter.png`
    }
  ]
};
