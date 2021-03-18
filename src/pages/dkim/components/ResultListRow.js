import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Icon from 'components/Icon';

import './ResultListRow.scss';

const ResultListRow = (props) => {
  const { id, subject, result, header_from, received, email } = props;
  const resultClasses = result ? 'is-valid' : 'has-error';

  return (
    <Link to={`/dkim/results/${email}/${id}`} className='dkimResultListRow'>
      <div className='panel marginBottom--none'>
        <div className='panel__body'>
          <div className={`dkimResultListRow__result ${resultClasses}`}>
            <Icon name={result ? 'check-circle' : 'exclamation-circle'} />
          </div>
          <div className='dkimResultListRow__details'>
            <div className='dkimResultListRow__subject'>
              <span className='dkimResultListRow__label'>subject</span>
              {subject}
            </div>
            <div className='dkimResultListRow__from'>
              <span className='dkimResultListRow__label'>from</span>
              {header_from}
            </div>
            <div className='dkimResultListRow__action'>
              <span className='dkimResultListRow__received'>{received}</span>
              <Icon name='chevron-right' />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

ResultListRow.propTypes = {
  id: PropTypes.number.isRequired,
  subject: PropTypes.string.isRequired,
  result: PropTypes.bool.isRequired,
  header_from: PropTypes.string.isRequired,
  received: PropTypes.string.isRequired
};

export default ResultListRow;
