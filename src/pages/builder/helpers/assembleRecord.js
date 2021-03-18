// TODO also check if valid before adding to string?
export const mx = (useDefault, hosts) => {
  const mxDefault = useDefault ? 'mx' : '';
  const mxHosts = hosts.map((host) => host.name && `mx:${host.name}`).join(' ');
  return `${mxDefault} ${mxHosts}`;
};

export const a = (useDefault, hosts) => {
  const aDefault = useDefault ? 'a' : '';
  const aHosts = hosts.map((host) => host.name && `a:${host.name}`).join(' ');
  return `${aDefault} ${aHosts}`;
};

export const ip = (ips) => ips.map(({ type, address }) => address && `${type}:${address}`).join(' ');

export const include = (includes) => includes.map((host) => host.name && `include:${host.name}`).join(' ');

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
