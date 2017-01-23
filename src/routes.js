import React from 'react';
import { Route, Redirect } from 'react-router';
import App from 'components/App';
import DKIMHome from 'pages/dkim/HomePage';
import DKIMResults from 'pages/dkim/ResultListPage';
import DKIMDetail from 'pages/dkim/ResultDetailPage';
import NotFound from 'pages/notFound/NotFound';

export default (
  <Route>
    <Redirect from='/' to='/dkim' />
    <Route path='/' component={App}>
      <Redirect from='/dkim/results' to='/dkim' />
      <Route path='dkim' component={DKIMHome} />
      <Route path='dkim/results/:email' component={DKIMResults} />
      <Route path='dkim/results/:email/:detailId' component={DKIMDetail} />
      <Route path='*' component={NotFound} />
    </Route>
  </Route>
);
