import React from 'react';
import { IndexRoute, IndexRedirect, Route, Redirect, browserHistory } from 'react-router';
import App from 'components/App';
import DKIMHome from 'pages/dkim/HomePage';
import DKIMResults from 'pages/dkim/ResultListPage';
import DKIMDetail from 'pages/dkim/ResultDetailPage';
import NotFound from 'pages/notFound/NotFound';
import SPFQuery from 'pages/spf/QueryPage';
import SPFResults from 'pages/spf/ResultsPage';
import SPFBuilder from 'pages/builder/Builder';

const redirectRoot = () => {
  const { search } = browserHistory.getCurrentLocation();
  if (process.env.NODE_ENV === 'development') {
    window.location = 'https://localhost:3000/dkim';
  } else {
    window.location = `https://www.sparkpost.com/email-tools${search}`;
  }
};

export default (
  <Route>
    <Route path='/' onEnter={redirectRoot} />

    <Route path='/dkim' component={App}>
      <IndexRoute component={DKIMHome} />

      <Redirect from='results' to='/dkim' />
      <Route path='results/:email' component={DKIMResults} />
      <Route path='results/:email/:detailId' component={DKIMDetail} />
    </Route>

    <Route path='/spf' component={App}>
      <IndexRedirect to='inspector' />

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
