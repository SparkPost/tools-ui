import qs from 'qs';
import _ from 'lodash';
import config from 'config/index';

export const baseUrl = window.location.href.replace(/^(https?):\/\/([^/?]+)((\/|\?).*)?/, '$1://$2');

export const getEncodedUrl = ({ pathname = '', search = '' }) => encodeURIComponent(`${baseUrl}${pathname}${search}`);

// Contructs Query Params
export const getQueryParams = ({ search = ''}, extraQueryParams = {}) => {
  search = search.replace('?', '');
  const allParams = {};
  _.defaults(allParams, config.signupQueryDefaults, qs.parse(search));
  _.assign(allParams, extraQueryParams);

  return qs.stringify(allParams);
};

// Contructs Query Params with Return path
export const getLoginSignUpQueryParams = (location, extraQueryParams) => (
  `return=${getEncodedUrl(location)}&${getQueryParams(location, extraQueryParams)}`
);
