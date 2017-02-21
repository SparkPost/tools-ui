export const baseUrl = window.location.href.replace(/^(https?):\/\/([^/?]+)((\/|\?).*)?/, '$1://$2');

export default ({ pathname = '', search = '' }) => `${baseUrl}${pathname}${search}`;
