import { baseUrl } from 'helpers/getCurrentUrl';

export const INTRO_TEXT = 'Visualize your SPF records. Identify which servers are authorized to send on behalf of a domain.';

export const inspectorMeta = {
  title: 'SPF Inspector',
  meta: [
    {
      name: 'description',
      content: 'SPF email authentication is important, but hard to grok. Check SPF rules for sending from your domain with this easy tool from the email experts at SparkPost.'
    },
    // Og
    {
      property: 'og:title',
      content: 'SPF Inspector'
    },
    {
      property: 'og:url',
      content: 'https://tools.sparkpost.com/spf/inspector'
    },
    {
      property: 'og:description',
      content: 'SPF email authentication is important, but hard to grok. Check SPF rules for sending from your domain with this easy tool from the email experts at SparkPost.'
    },
    {
      property: 'og:image',
      content: `${baseUrl}/images/inspector_og.png`
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'SPF Inspector'
    },
    {
      name: 'twitter:description',
      content: 'SPF email authentication is important, but hard to grok. Check SPF rules for sending from your domain with this easy tool from the email experts at SparkPost.'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: `${baseUrl}/images/inspector_twitter.png`
    }
  ]
};
