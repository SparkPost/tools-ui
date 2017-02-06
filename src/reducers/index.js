import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth';
import spfTreeReducer from './spfTree';
import spfInspectReducer from './spfInspect';
import spfHistoryReducer from './spfHistory';

const reducers = {
  auth: authReducer,
  spfInspect: combineReducers({
    tree: spfTreeReducer,
    details: spfInspectReducer
  }),
  spfHistory: spfHistoryReducer,
  form: formReducer
};

export default combineReducers(reducers);
