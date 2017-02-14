import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHistory } from 'actions/spf';
import HistoryRow from './HistoryRow';
import ApiErrorMessage from 'components/errors/ApiErrorMessage';

export class HistoryList extends Component {

  componentDidMount() {
    this.props.getHistory();
  }

  renderBody() {
    const { loading, error } = this.props;

    if (error) {
      return this.renderError();
    }

    if (loading) {
      return this.renderLoading();
    }

    return this.renderResults();
  }

  renderResults() {
    const { list } = this.props;

    if (list.length === 0) {
      return (
        <div className='text--center'>
          <p className='text--regular text--muted'>Search for SPF records to start saving results!</p>
        </div>
      );
    }

    return list.map((row, i) => <HistoryRow key={i} {...row} />);
  }

  renderLoading() {
    return (
        <div className='text--center paddingTop--md'>
          <p className='text--regular text--muted'>Loading History...</p>
        </div>
    );
  }

  renderError() {
    const { error } = this.props;
    return <ApiErrorMessage friendly='Unable to load query history' error={error} />;
  }

  render() {
    return (
      <div className='text--left'>
        <h4 className='marginBottom--xs'>SPF History</h4>
        {this.renderBody()}
      </div>
    );
  }
}

const mapStateToProps = ({ spfHistory }) => ({ ...spfHistory });

export default connect(mapStateToProps, { getHistory })(HistoryList);
