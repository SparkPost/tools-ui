/* eslint-disable complexity */
import _ from 'lodash';
import { flatten } from 'helpers/tree';
import makeReducer from 'reducers/makeReducer';

const INITIAL_STATE = {
  root: {}
};

export default makeReducer({
  initialState: INITIAL_STATE,
  types: {
    'SPF_INSPECT_SUCCESS': (state, action) => {
      const flat = flatten({ node: action.payload.spf_tree }); // refresh will reset the expand/collapse state, probably fine
      flat.root.expanded = true; // expand just the root to start out
      return flat;
    },
    'SPF_INSPECT_FAIL': () => INITIAL_STATE,
    'SPF_TREE_EXPAND': (state, action) => ({
      ...state,
      [action.payload]: {
        ...state[action.payload],
        expanded: true
      }
    }),
    'SPF_TREE_COLLAPSE': (state, action) => ({
      ...state,
      [action.payload]: {
        ...state[action.payload],
        expanded: false
      }
    }),
    'SPF_TREE_EXPAND_ALL': (state) => _.mapValues(state, (node) => ({ ...node, expanded: true })),
    'SPF_TREE_COLLAPSE_ALL': (state) => _.mapValues(state, (node) => ({ ...node, expanded: false }))
  }
});
