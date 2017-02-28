import makeReducer from 'reducers/makeReducer';

export default makeReducer({
  initialState: {
    loggedIn: false
  },
  types: {
    'AUTH_LOG_IN': (state, action) => {
      const { token, username = state.username, refreshToken } = action.payload;
      return {
        token,
        username,
        refreshToken,
        loggedIn: true
      };
    },
    'AUTH_LOG_OUT': () => ({ loggedIn: false }),
    'AUTH_LOG_IN_PING_SUCCESS': (state, action) => ({
      ...state,
      customerId: action.payload.customerId
    })
  }
});
