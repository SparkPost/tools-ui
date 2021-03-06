import { formatDate } from 'helpers/date';
import makeReducer from 'reducers/makeReducer';

const initialState = {
  error: null,
  tableRows: [],
  loading: false
};

export default makeReducer({
  initialState,
  types: {
    'DKIM_GET_RESULTS_PENDING': (state) => ({ ...state, loading: true }),
    'DKIM_GET_RESULTS_SUCCESS': (state, action) => {
      const tableRows = action.payload.map(({ id, subject, result, header_from, received }) => (
        {
          id, header_from, subject, result,
          received: `Delivered on ${formatDate(received)}`
        }
      ));

      return {
        ...state,
        loading: false,
        error: null,
        tableRows: tableRows
      };
    },
    'DKIM_GET_RESULTS_FAIL': (state, action) => ({
      ...state,
      loading: false,
      tableRows: [],
      error: action.payload
    })
  }
});
