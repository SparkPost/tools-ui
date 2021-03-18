import React from 'react';
import ErrorMessage from './ErrorMessage';
import _ from 'lodash';

export default ({ friendly, error }) => {
  const { message, response = {} } = error;
  const apiMessage = _.get(response, 'data.errors[0].message');

  let details = message;

  if (apiMessage) {
    details += ` (${apiMessage})`;
  }

  return <ErrorMessage friendly={friendly} details={details} />;
};
