import cookie from 'js-cookie';

const COOKIE_NAME = '_dkimTestEmail';

/*
 * Actions for the DKIM home section & cookie loading
 * for saved dkim addresses
 */

function saveValidatorEmail({ results: { email } }) {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);
  cookie.set(COOKIE_NAME, email, { expires });
}

export function deleteSavedValidatorEmail() {
  cookie.remove(COOKIE_NAME);

  return {
    type: 'DKIM_REMOVE_EMAIL',
    email: null
  };
}

export function checkSavedValidatorEmail() {
  const email = cookie.get(COOKIE_NAME);

  return {
    type: 'DKIM_SAVED_EMAIL',
    email: email
  };
}

export function getValidatorEmail() {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'DKIM_GENERATE_EMAIL',
      url: '/messaging-tools/validator-emails',
      method: 'post',
      chain: {
        success: saveValidatorEmail
      }
    }
  };
}

/*
 * Actions for the DKIM list and detail sections
 */

export function getValidatorResults(email) {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'DKIM_GET_RESULTS',
      url: `/messaging-tools/validations/${email}`,
      method: 'get'
    }
  };
}

export function getValidatorDetailedResult(email, detailId) {
  return {
    type: 'SPARKPOST_API_REQUEST',
    meta: {
      type: 'DKIM_GET_DETAILED_RESULT',
      url: `/messaging-tools/validations/${email}/${detailId}`,
      method: 'get'
    }
  };
}
