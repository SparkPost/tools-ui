export default {
  apiBase: 'no-default-set',
  appUrl: 'no-default-set',
  apiRequestTimeout: 10000,
  authCookie: {
    name: 'website_auth',
    options: {
      domain: '.sparkpost.com',
      path: '/'
    },
    requestHeaders: {
      Authorization: 'Basic bXN5c1VJTGltaXRlZDphZjE0OTdkYS02NjI5LTQ3NTEtODljZS01ZDBmODE4N2MyMDQ=',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
};
