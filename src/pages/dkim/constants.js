import { baseUrl } from 'helpers/getCurrentUrl';

export const INTRO_TEXT = 'Verifying DKIM is one step that can help your email get to the inbox. Not only is it an industry standard, but when configured correctly it demonstrates to ISPs that – unlike spammers – you are accountable for your email. Check DKIM quickly with this simple DKIM Validator tool.';

export const LIST_ERROR_MESSAGE = 'Sorry, we\'re having trouble finding your messages.';
export const DETAIL_ERROR_MESSAGE = 'Sorry, we\'re having trouble finding your message details.';

export const dkimMeta = {
  title: 'DKIM Validator',
  meta: [
    {
      name: 'description',
      content: 'DKIM is a key email authentication standard. Verify your messages have working DKIM signatures with this easy tool from the email experts at SparkPost.'
    },
    // Og
    {
      property: 'og:title',
      content: 'DKIM Validator'
    },
    {
      property: 'og:url',
      content: 'https://tools.sparkpost.com/dkim'
    },
    {
      property: 'og:description',
      content: 'DKIM is a key email authentication standard. Verify your messages have working DKIM signatures with this easy tool from the email experts at SparkPost.'
    },
    {
      property: 'og:image',
      content: `${baseUrl}/images/dkim_og.png`
    },
    // Twitter
    {
      name: 'twitter:title',
      content: 'DKIM Validator'
    },
    {
      name: 'twitter:description',
      content: 'DKIM is a key email authentication standard. Verify your messages have working DKIM signatures with this easy tool from the email experts at SparkPost.'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:image',
      content: `${baseUrl}/images/dkim_twitter.png`
    }
  ]
};
