export const mx = (useDefault, hosts) => {
  const mxDefault = useDefault ? 'mx' : '';
  const mxHosts = hosts.map((host) => `mx:${host}`).join(' ');
  return `${mxDefault} ${mxHosts}`;
};

export const a = (useDefault, hosts) => {
  const aDefault = useDefault ? 'a' : '';
  const aHosts = hosts.map((host) => `a:${host}`).join(' ');
  return `${aDefault} ${aHosts}`;
};

export const ip = (ips) => ips.map(({ type, address }) => `${type}:${address}`).join(' ');

export const include = (includes) => includes.map((domain) => `include:${domain}`).join(' ');

export const all = (all) => {
  switch (all) {
    case 'Fail':
      return '-all';
    case 'Soft Fail':
      return '~all';
    case 'Neutral':
      return '?all';
    default:
      return '';
  }
};

export default (data) => `v=spf1 ${mx(data.mx.useDefault, data.mx.hosts)} ${a(data.a.useDefault, data.a.hosts)} ${ip(data.ip)} ${include(data.include)} ${all(data.all)}`;
