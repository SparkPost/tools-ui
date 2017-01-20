import React from 'react';
import { ERROR_MESSAGES } from './constants';

import './ErrorPage.scss';

const ErrorPage = (props) => {
  const { errorCode } = props.params;
  const code = ERROR_MESSAGES[errorCode] ? errorCode : '404';

  return (
    <div className='flex center-xs'>
      <div className='col-xs-12 errorPage'>
        <h5 className='errorPage__desc'>{ERROR_MESSAGES[code]}</h5>
        <h1 className='errorPage__code'>{code}</h1>
      </div>
    </div>
  );
};

export default ErrorPage;
