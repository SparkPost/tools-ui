import React from 'react';
import { connect } from 'react-redux';
import Icon from 'components/Icon';
import { SupportLink } from 'components/SupportLink';
import { ActionLink } from 'components/button/Button';
import { supportUrl } from 'components/SupportLink';
import { expandAll } from 'actions/spf';

import './ResultsErrors.scss';

export default (props) => {
  const { errors = [], warnings = [] } = props;

  const renderSummary = () => {
    const errorMessage = `${errors.length} Error${errors.length === 1 ? '' : 's'} Found`;
    const warningMessage = `${warnings.length} Warning${warnings.length === 1 ? '' : 's'} Found`;

    if (!errors.length && !warnings.length) {
      return <h5 className='spf-resultsErrors__summary is-valid'><Icon name='check-circle' /> 0 Errors Found</h5>;
    }

    return (
      <h5>
        {errors.length > 0 && <span className='spf-resultsErrors__summary has-error'><Icon name='exclamation-circle' extras='paddingRight--xs' />{errorMessage}</span> }
        {warnings.length > 0 && <span className='spf-resultsErrors__summary has-warning'><Icon name='exclamation-triangle' extras='paddingRight--xs'/>{warningMessage}</span> }
      </h5>
    );
  };

  const renderRow = (error, idx, type) => (
    <div key={`e-${idx}`} className='panel__body'>
      <p className='spf-resultsErrors__message'>
        <Icon name={type === 'error' ? 'exclamation-circle' : 'exclamation-triangle'} extras={`paddingRight--xs has-${type}`}/>
        {error.message}.
      </p>
      <div>
        <span className='spf-resultsErrors__link'><NodeLink id={error.id}/></span>
        <span className='spf-resultsErrors__link'><SupportLink code={error.code} /></span>
      </div>
    </div>
  );

  return (
    <div className='panel spf-resultsErrors'>
      <div className='panel__heading'>
        <div className='float--right'>
          <ActionLink external={supportUrl} target='_blank'>How do I fix errors?</ActionLink>
        </div>
        { renderSummary() }
      </div>
      { errors.map((error, idx) => renderRow(error, idx, 'error')) }
      { warnings.map((error, idx) => renderRow(error, idx, 'warning')) }
    </div>
  );
};

const NodeLink = connect(null, { expandAll })((props) => {
  const { expandAll, id } = props;
  const handleClick = (e) => {
    e.preventDefault();
    expandAll();
    const el = document.getElementById(id);
    el && window.scroll(0, el.getBoundingClientRect().top - 70);
  };

  return (
    <a className='spf-resultsErrors__find' href={`#${id}`} onClick={handleClick}>Find in SPF record <Icon name='search'/></a>
  );
});
