import React from 'react';
import { Route, Redirect } from 'react-router';
import App from 'components/App';
import DKIMHome from 'pages/dkim/HomePage';
import DKIMResults from 'pages/dkim/ResultListPage';
import DKIMDetail from 'pages/dkim/ResultDetailPage';
import ErrorPage from 'pages/error/ErrorPage';

export default (
  <Route>
    <Redirect from='/' to='/dkim' />
    <Route path='/' component={App}>
      <Redirect from='/dkim/results' to='/dkim' />
      <Route path='dkim' component={DKIMHome} />
      <Route path='dkim/results/:email' component={DKIMResults} />
      <Route path='dkim/results/:email/:detailId' component={DKIMDetail} />
      <Route path=':errorCode' component={ErrorPage} />
      <Redirect from='*' to='404' />
    </Route>
  </Route>
);
