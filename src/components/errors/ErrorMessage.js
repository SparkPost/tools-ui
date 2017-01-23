import React from 'react';
import Icon from 'components/Icon';

import './ErrorMessage.scss';

export default ({ message = false, icon = 'exclamation-circle' }) => (
    <div className='errorMessage'>
      {icon && <Icon name={icon} />}
      {message || 'Something happened!'}
    </div>
  );
