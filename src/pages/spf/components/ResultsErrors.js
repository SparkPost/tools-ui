import React from 'react';
import Icon from 'components/Icon';

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

  // TODO find out how to get different errors to finish this section
  // TODO see if we can anchor link to child with error
  const renderRow = (error, idx, type) => (
    <div key={`e-${idx}`} className='panel__body'>
      <p>
        <Icon name={type === 'error' ? 'exclamation-circle' : 'exclamation-triangle'} extras={`paddingRight--xs has-${type}`}/>
        {error.message}
      </p>
    </div>
  );

  return (
    <div className='panel spf-resultsErrors'>
      <div className='panel__heading'>
        {/* <div className='float--right'><ActionLink>How do I fix errors?</ActionLink></div> */}
        { renderSummary() }
      </div>
      { errors.map((error, idx) => renderRow(error, idx, 'error')) }
      { warnings.map((error, idx) => renderRow(error, idx, 'warning')) }
    </div>
  );
};
