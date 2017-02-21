import qs from 'qs';
import _ from 'lodash';
import config from 'config/index';
const baseUrl = window.location.href.replace(/^(https?):\/\/([^/?]+)((\/|\?).*)?/, '$1://$2');

export const getEncodedUrl = ({ pathname = '', search = '' }) => encodeURIComponent(`${baseUrl}${pathname}${search}`);

export const getQueryParams = ({ search = ''}) => {
  search = search.replace('?', '');
  const allParams = {};
  _.merge(allParams, config.signupQueryDefaults, qs.parse(search));
  return qs.stringify(allParams);
};
