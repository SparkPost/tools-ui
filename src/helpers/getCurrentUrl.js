import _ from 'lodash';
const baseUrl = window.location.href.replace(/^(https?):\/\/([^/?]+)((\/|\?).*)?/, '$1://$2');
const defaultParams = {
  src: 'SP-Tools',
  sfdcid: '701600000019BWh'
};

export const getEncodedUrl = ({ pathname = '', search = '' }) => encodeURIComponent(`${baseUrl}${pathname}${search}`);

export const getQueryParams = ({ search = ''}) => {
  const allParams = {};

  // make an object, then set default params, with a preference to what is in the URL
  const searchPairs = search.replace('?', '').split('&');
  const urlParams = _.reduce(searchPairs, (map, pair) => {
    const [key, value] = pair.split('=');
    if (key && value) {
      map[key] = value;
    }
    return map;
  }, {});

  Object.assign(allParams, defaultParams, urlParams);

  // flatten to string
  return _.map(allParams, (val, key) => `${key}=${val}`).join('&');
};
