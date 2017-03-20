export default {
  apiBase: 'http://api.sparkpost.dev/api/v1',
  // appUrl: 'https://app-uat.tst.sparkpost.com'
  appUrl: 'http://app.sparkpost.dev',
  logInUrl: 'http://app.sparkpost.dev/auth',
  signUpUrl: 'http://app.sparkpost.dev/sign-up',
  authCookie: {
    options: {
      domain: '.sparkpost.dev'
    }
  }
};
