import makeReducer from 'reducers/makeReducer';
import { formatDate } from 'helpers/date';

const initialState = {
  error: null,
  detailTableRows: [],
  sigTableHeaders: ['Status', 'DKIM Selector (s=)', 'Signing Domain (d=)', 'Timestamp (t=)'],
  sigTableRows: [],
  loading: false
};

export default makeReducer({
  initialState,
  types: {
    'DKIM_GET_DETAILED_RESULT_PENDING': (state) => ({ ...state, loading: true }),
    'DKIM_GET_DETAILED_RESULT_SUCCESS': (state, action) => ({
      ...state,
      loading: false,
      error: null,
      detailTableRows: [
        ['Subject', action.payload.subject],
        ['From', action.payload.header_from],
        ['On', formatDate(action.payload.received)],
        ['Status', action.payload.result ? 'Passed' : 'Failed']
      ],
      sigTableRows: action.payload.sigs.map(({ s, d, t, result }) => ([result ? 'Passed' : 'Failed', s, d, t || 'N/A']))
    }),
    'DKIM_GET_DETAILED_RESULT_FAIL': (state, action) => ({
      ...state,
      detailTableRows: [],
      sigTableRows: [],
      loading: false,
      error: action.payload
    })
  }
});
