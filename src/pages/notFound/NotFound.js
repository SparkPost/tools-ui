import React from 'react';

import './NotFound.scss';

const NotFound = () => (
  <div className='flex center-xs'>
    <div className='col-xs-12 notFound'>
      <h5 className='notFound__desc'>The page you are looking for can't be found.</h5>
      <h1 className='notFound__code'>404</h1>
    </div>
  </div>
);

export default NotFound;
