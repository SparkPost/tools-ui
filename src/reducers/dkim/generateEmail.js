import makeReducer from 'reducers/makeReducer';

const initialState = {
  error: null,
  email: null,
  loading: false
};

export default makeReducer({
  initialState,
  types: {
    'DKIM_REMOVE_EMAIL': (state) => ({
      ...state,
      email: null
    }),
    'DKIM_SAVED_EMAIL': (state, action) => ({
      ...state,
      email: action.email
    }),
    'DKIM_GENERATE_EMAIL_PENDING': (state) => ({
      ...state,
      email: null,
      error: null,
      loading: true
    }),
    'DKIM_GENERATE_EMAIL_SUCCESS': (state, action) => ({
      ...state,
      error: null,
      loading: false,
      email: action.payload.email
    }),
    'DKIM_GENERATE_EMAIL_FAIL': (state, action) => ({
      ...state,
      email: null,
      loading: false,
      error: action.payload
    })
  }
});
