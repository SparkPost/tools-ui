import React, { Component } from 'react';

import ResultListRow from './components/ResultListRow';
import ResultListHeader from './components/ResultListHeader';
import ApiErrorMessage from 'components/errors/ApiErrorMessage';
import { LIST_ERROR_MESSAGE } from './constants';

import { getValidatorResults } from 'actions/dkim';
import { connect } from 'react-redux';

class ResultListPage extends Component {
  componentDidMount() {
    const { email } = this.props.params;

    this.props.getValidatorResults(email);
  }

  renderResultListRow(row) {
    return (
      <ResultListRow key={row.id} {...row} email={this.props.params.email} />
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
    const { tableRows, error } = this.props;

    if (error) {
      return <ApiErrorMessage friendly={LIST_ERROR_MESSAGE} error={error} />;
    }

    if (tableRows.length === 0) {
      return this.renderEmpty();
    }

    return tableRows.map((values) => this.renderResultListRow(values));
  }

  render() {
    const { loading, loggedIn, params: { email } } = this.props;

    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10 col-lg-8'>
          <ResultListHeader loggedIn={loggedIn} email={email} getResults={() => this.props.getValidatorResults(email)}/>
          {loading ? this.renderLoading() : this.renderResults()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { loggedIn }, dkim }) => ({ loggedIn, ...dkim.resultsList });

export default connect(mapStateToProps, {
  getValidatorResults
})(ResultListPage);
