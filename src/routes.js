import React from 'react';
import { IndexRoute, Route, Redirect } from 'react-router';
import App from 'components/App';
import DKIMHome from 'pages/dkim/HomePage';
import DKIMResults from 'pages/dkim/ResultListPage';
import DKIMDetail from 'pages/dkim/ResultDetailPage';
import NotFound from 'pages/notFound/NotFound';
import SPFQuery from 'pages/spf/QueryPage';
import SPFResults from 'pages/spf/ResultsPage';
import SPFBuilder from 'pages/builder/Builder';

export default (
  <Route>
    <Route path='/' onEnter={() => window.location = 'https://www.sparkpost.com/email-tools'} />

    <Route path='/dkim' component={App}>
      <IndexRoute component={DKIMHome} />

      <Redirect from='results' to='/dkim' />
      <Route path='results/:email' component={DKIMResults} />
      <Route path='results/:email/:detailId' component={DKIMDetail} />
    </Route>

    <Route path='/spf' component={App}>
      <IndexRoute to='inspector' />
      <Route path='inspector' component={SPFQuery} />
      <Route path='inspector/:domain' component={SPFResults} />
      <Redirect from='inspector/results/:domain' to='/spf/inspector/:domain' />

      <Route path='builder' component={SPFBuilder} />

    </Route>

    <Route path='*' component={App} >
      <IndexRoute component={NotFound}/>
    </Route>
  </Route>
);
