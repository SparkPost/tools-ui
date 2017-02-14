import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ResultsHeader from './components/ResultsHeader';
import ResultsErrors from './components/ResultsErrors';
import { BackLink, ActionLink } from 'components/button/Button';
import ApiErrorMessage from 'components/errors/ApiErrorMessage';
import { inspect, expandAll, collapseAll, expand, collapse } from 'actions/spf';

import SPFNode from './components/SPFNode';

class ResultsPage extends Component {

  componentDidMount() {
    return this.props.inspect(this.props.params.domain);
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

  renderError() {
    const { params: { domain }, error } = this.props;
    return <ApiErrorMessage friendly={`Currently unable to get results for ${domain}, please try again.`} error={error} />;
  }

  renderLoading() {
    const { params: { domain } } = this.props;
    return (
      <div className='panel panel--accent'>
        <div className='panel__body text--center paddingTop--xxl paddingBottom--xxl'>
          <h4 className='text--muted'>Inspecting {domain}...</h4>
        </div>
      </div>
    );
  }

  renderResults() {
    const { tree, params: { domain }, results, collapseAll, expandAll } = this.props;
    return (
      <div>
        <ResultsErrors errors={results.spfErrors} warnings={results.spfWarnings} />
        <div className="panel marginBottom--none">
          <div className='panel__heading'>
            <div className='float--right'>
              <ActionLink title='Expand or Collapse All' onClick={() => tree.root.expanded ? collapseAll() : expandAll()}>
                Expand/Collapse All
              </ActionLink>
            </div>
            <h4>SPF Record</h4>
          </div>
        </div>
        <SPFNode root={true} tree={tree} {...tree.root} domain={domain} expand={this.props.expand} collapse={this.props.collapse}>{tree.root.children}</SPFNode>
      </div>
    );
  }

  render() {
    const { loading, results, inspect, loggedIn, params: { domain } } = this.props;
    return (
      <div>
        <BackLink to='/spf/inspector' title='Back to SPF Inspector' />
        {!loading && <ResultsHeader {...results} loggedIn={loggedIn} domain={domain} refresh={() => inspect(domain)} />}
        {this.renderBody()}
      </div>
    );
  }
}

const mapStateToProps = ({ auth: { loggedIn }, spfInspect: { tree, details }}) => ({ loggedIn, tree, ...details });

export default connect(mapStateToProps, {
  inspect,
  expandAll,
  collapseAll,
  expand,
  collapse
})(ResultsPage);
