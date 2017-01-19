import React, { Component } from 'react';
import axios from 'axios';
import config from 'config/index';
import moment from 'moment';

import ResultListRow from 'components/dkim/ResultListRow';
import ResultListHeader from 'components/dkim/ResultListHeader';

export default class ResultListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      tableRows: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getResults();
  }

  // TODO move this to redux
  getResults() {
    const { email } = this.props.params;
    this.setState({ loading: true });
    return axios.get(`${config.apiBase}/messaging-tools/validations/${email}`)
      .then(({ data }) => {
        const { results } = data;
        this.setState({
          tableRows: results.map(({ id, subject, result, header_from, received }) => (
            {
              id, header_from, subject,
              result: result ? 'Passed' : 'Failed',
              received: moment(received).local().format('[Delivered on] MMM D YYYY[, at] h:mm A')
            }
          )),
          loading: false
        });
      }, ({ response: { data: { errors = [] }}}) => {
        this.setState({
          error: errors[0],
          loading: false
        });
      });
  }

  renderResultListRow({ id, subject, result, header_from, received }) {
    const { email } = this.props.params;
    return (
      <ResultListRow key={id}
        id={id}
        subject={subject}
        result={result}
        header_from={header_from}
        received={received}
        email={email} />
    );
  }

  renderEmpty() {
    return (
      <div className='text--center paddingTop--md'>
        <p className='text--regular text--muted marginBottom--none'>No Messages Received</p>
        <p className='text--regular text--muted'>Send an email to your generated test address!</p>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className='text--center paddingTop--md'>
        <p className='text--regular text--muted'>Loading Messages...</p>
      </div>
    );
  }

  renderResults() {
    const { tableRows } = this.state;

    if (tableRows.length === 0) {
      return this.renderEmpty();
    }

    return tableRows.map((values) => this.renderResultListRow(values));
  }

  render() {
    const { error, loading } = this.state;
    const { email } = this.props.params;

    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10 col-lg-8'>
          <ResultListHeader email={email} error={error} getResults={() => this.getResults()}/>
          {loading ? this.renderLoading() : this.renderResults()}
        </div>
      </div>
    );
  }
}
