import { formatDate } from 'helpers/date';
import _ from 'lodash';
import makeReducer from 'reducers/makeReducer';

export default makeReducer({
  initialState: {
    results: { errors: [], warnings: [], spf_tree: { root: {}} },
    loading: false,
    error: null
  },
  types: {
    'SPF_INSPECT_PENDING': (state) => ({
      ...state,
      loading: true
    }),
    'SPF_INSPECT_SUCCESS': (state, action) => {
      const { errors, warnings, authorized_netblocks, dns_lookups } = action.payload;
      const timestamp = formatDate();
      return {
        ...state,
        results: {
          spfErrors: errors,
          spfWarnings: warnings,
          authorized_netblocks,
          dns_lookups,
          timestamp
        },
        loading: false
      };
    },
    'SPF_INSPECT_FAIL': (state, action) => ({
      ...state,
      loading: false,
      error: action.payload
    })
  }
});
