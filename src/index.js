/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import spApiMiddleware from 'middleware/sparkpostApiRequest';
import rootReducer from './reducers';
import routes from './routes';
import './styles/tools.scss';

import reportWebVitals from './reportWebVitals';

// necessary for redux devtools in development mode only
// eslint-disable-next-line no-mixed-operators
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, spApiMiddleware))
);

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </Provider>
), document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
