import qs from 'qs';
import _ from 'lodash';
import config from 'config/index';
import { browserHistory } from 'react-router';

export const baseUrl = window.location.href.replace(/^(https?):\/\/([^/?]+)((\/|\?).*)?/, '$1://$2');

const getLocation = () => browserHistory.getCurrentLocation();

const getEncodedUrl = ({ pathname = '', search = '' }) => encodeURIComponent(`${baseUrl}${pathname}${search}`);

// Contructs Query Params
const getQueryParams = (extraQueryParams = {}) => {
  const search = getLocation().search.replace('?', '');
  const allParams = {};
  _.defaults(allParams, config.signupQueryDefaults, qs.parse(search));
  _.assign(allParams, extraQueryParams);

  return qs.stringify(allParams);
};

export const getSignUpUrl = (extraQueryParams) => (
  `${config.signUpUrl}?return=${getEncodedUrl(getLocation())}&${getQueryParams(extraQueryParams)}`
);

export const getFooterSignUpUrl = () => (
  `${config.signUpUrl}?${getQueryParams()}`
);

export const getLoginUrl = () => (
  `${config.logInUrl}?return=${getEncodedUrl(getLocation())}&${getQueryParams()}`
);
