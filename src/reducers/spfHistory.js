import makeReducer from 'reducers/makeReducer';
import { formatDate } from 'helpers/date';

export default makeReducer({
  initialState: {
    loading: false,
    error: null,
    list: []
  },
  types: {
    'SPF_GET_HISTORY_PENDING': (state) => ({
      ...state,
      loading: true
    }),
    'SPF_GET_HISTORY_SUCCESS': (state, action) => ({
      ...state,
      loading: false,
      list: action.payload.map(({ domain, status, timestamp }, id) => ({
        id, domain, status,
        timestamp: formatDate(timestamp)
      }))
    }),
    'SPF_GET_HISTORY_FAIL': (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }
});
