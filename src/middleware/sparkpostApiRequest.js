/**
 * Intercepts SPARKPOST_API_REQUEST actions and
 * creates the appropriate HTTP request, dispatching
 * the 3 necessary actions for each request.
 */

import _ from 'lodash';
import { refresh, logout } from 'actions/auth';
import { sparkpostRequest, useRefreshToken } from 'helpers/http';

const maxRefreshRetries = 3;

export default function sparkpostApiRequest({ dispatch, getState }) {
  return (next) => (action) => {

    next(action);

    if (action.type !== 'SPARKPOST_API_REQUEST') {
      return;
    }

    const { auth } = getState();
    const { meta } = action;
    const { url, method = 'get', type = 'NO_TYPE_DEFINED', params, headers, data, chain = {}, retries = 0 } = meta;
    const PENDING_TYPE = `${type}_PENDING`;
    const SUCCESS_TYPE = `${type}_SUCCESS`;
    const FAIL_TYPE = `${type}_FAIL`;

    dispatch({
      type: PENDING_TYPE
    });

    const httpOptions = {
      method: method.toLowerCase(),
      url,
      params,
      headers,
      data
    };

    if (auth.loggedIn) {
      _.set(httpOptions, 'headers.Authorization', auth.token);
    }

    return sparkpostRequest(httpOptions).then(({ data: { results }}) => {
      // we only get here if the request returned a 2xx status code
      dispatch({
        type: SUCCESS_TYPE,
        payload: results
      });

      // if we need to chain together another action, do it here
      if (typeof chain.success === 'function') {
        chain.success({ dispatch, getState, results });
      }

    }, ({ message, response = {} }) => {
      // NOTE: if this is a 401, need to do a refresh to get
      // a new auth token and then re-dispatch this action
      if (response.status === 401 && auth.refreshToken && retries <= maxRefreshRetries) {
        action.meta.retries = retries + 1;

        // call API for a new token
        return useRefreshToken(auth.refreshToken)

          // dispatch a refresh action to save new token results in cookie and store
          .then(({ data }) => dispatch(refresh(data.access_token, data.refresh_token)))

          // dispatch the original action again, now that we have a new token ...
          // if anything in this refresh flow blew up, dispatch the fail action
          .then(() => dispatch(action), ({ message, response }) => {
            dispatch({
              type: FAIL_TYPE,
              payload: { message, response, retries }
            });
          });
      }

      // If we have a 401 and we're not refreshing, log the user out silently
      if (response.status === 401) {
        return dispatch(logout());
      }

      // any other API error should automatically fail, to be handled in the reducers/components
      dispatch({
        type: FAIL_TYPE,
        payload: { message, response }
      });
    })
    .catch((err) => {
      // curious to understand when/how errors would find their way here, and what happens if/when they do
      console.log('error appeared in spapirequest middleware catch()', err.message); // eslint-disable-line no-console
      throw err;
    });
  };
}
