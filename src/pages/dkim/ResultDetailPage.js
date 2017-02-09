import React, { Component } from 'react';

import Table from 'components/table/Table';
import ResultDetailHeader from './components/ResultDetailHeader';
import { BackLink } from 'components/button/Button';
import ErrorMessage from 'components/errors/ErrorMessage';
import { DETAIL_ERROR_MESSAGE } from './constants';

import { getValidatorDetailedResult } from 'actions/dkim';
import { connect } from 'react-redux';

class ResultDetailPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { email, detailId } = this.props.params;
    this.props.getValidatorDetailedResult(email, detailId);
  }

  renderLoading() {
    return (
      <div className='text--center paddingTop--xl paddingBottom--xl'>
        <p className='text--regular text--muted'>Loading Message Details...</p>
      </div>
    );
  }

  renderDetails() {
    const { detailTableRows, sigTableHeaders, sigTableRows, error } = this.props;
    if (error) { return null; }
    return (
      <div>
        <ResultDetailHeader rows={detailTableRows} />
        <div className='panel'>
          <div className='panel__body padding--none dkimResultDetailTable'>
            <Table headers={sigTableHeaders} rows={sigTableRows} />
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { error, loading } = this.props;
    const back = `/dkim/results/${this.props.params.email}`;
    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10'>
          <div className='text--left'><BackLink to={back} title='DKIM Results' /></div>
          {error && <ErrorMessage friendly={DETAIL_ERROR_MESSAGE} details={error.message} />}
          {loading ? this.renderLoading() : this.renderDetails()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ dkim }) => ({
  detailTableRows: dkim.resultsDetail.detailTableRows,
  sigTableHeaders: dkim.resultsDetail.sigTableHeaders,
  sigTableRows: dkim.resultsDetail.sigTableRows,
  error: dkim.resultsDetail.error,
  loading: dkim.resultsDetail.loading
});

export default connect(mapStateToProps, {
  getValidatorDetailedResult
})(ResultDetailPage);
