import { combineReducers } from 'redux';
import generateEmailReducer from './generateEmail';
import resultsListReducer from './resultsList';
import resultsDetailReducer from './resultsDetail';

export default combineReducers({
  generateEmail: generateEmailReducer,
  resultsList: resultsListReducer,
  resultsDetail: resultsDetailReducer
});
