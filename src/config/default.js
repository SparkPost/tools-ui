console.log('process.env: ', process.env);
const AUTH = process.env.REACT_APP_TOOLS_UI_AUTH;
console.log('AUTH: ', AUTH);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  apiBase: 'no-default-set',
  appUrl: 'no-default-set',
  logInUrl: 'no-default-set',
  signUpUrl: 'no-default-set',
  apiRequestTimeout: 10000,
  authCookie: {
    name: 'website_auth',
    options: {
      domain: '.sparkpost.com',
      path: '/'
    },
    requestHeaders: {
      Authorization: AUTH,
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  signupQueryDefaults: {
    src: 'SP-Tools',
    sfdcid: '701600000019BWh'
  },
  queryParams: {
    'dkim': {
      sfdcid: '701600000018y6o'
    },
    'inspector': {
      sfdcid: '701600000019B1U'
    }
  }
};
