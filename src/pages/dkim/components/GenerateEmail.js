import React from 'react';
import { Button } from 'components/button/Button';

export default (props) => (
  <span>
    <div className='panel panel--accent'>
      <div className='panel__body paddingTop--xl paddingBottom--xl text--center'>
        <h4>To get started, click on the button below to generate an email address.</h4>
        <Button type='blue' action={props.generate} track={true}>Generate Email Address</Button>
      </div>
    </div>
  </span>
);
