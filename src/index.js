import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import spApiMiddleware from 'middleware/sparkpostApiRequest';
import rootReducer from './reducers';
import routes from './routes';
import { trackPageView } from './actions/mixpanel';
import './styles/tools.scss';

// necessary for redux devtools in development mode only
const composeEnhancers = process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, spApiMiddleware))
);

const history = syncHistoryWithStore(browserHistory, store);
history.listen((location) => store.dispatch(trackPageView(location.pathname)));

ReactDOM.render((
  <Provider store={store}>
    <Router history={history} routes={routes} render={applyRouterMiddleware(useScroll())} />
  </Provider>
), document.getElementById('root'));
