import moment from 'moment';
import makeReducer from 'reducers/makeReducer';

export default makeReducer({
  initialState: {
    error: null,
    detailTableRows: [],
    sigTableHeaders: ['Status', 'DKIM Selector (s=)', 'Signing Domain (d=)', 'Timestamp (t=)'],
    sigTableRows: [],
    loading: true
  },
  types: {
    'DKIM_GET_DETAILED_RESULT_SUCCESS': (state, action) => ({
      ...state,
      detailTableRows: [
        ['Subject', action.payload.subject],
        ['From', action.payload.header_from],
        ['On', moment(action.payload.received).local().format('MMM D YYYY[, at] h:mm A')],
        ['Status', action.payload.result ? 'Passed' : 'Failed']
      ],
      sigTableRows: action.payload.sigs.map(({ s, d, t, result }) => ([result ? 'Passed' : 'Failed', s, d, t || 'N/A'])),
      loading: false
    }),
    'DKIM_GET_DETAILED_RESULT_FAIL': (state, action) => ({
      ...state,
      error: action.payload.message
    })
  }
});
