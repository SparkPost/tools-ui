import React from 'react';
import { ActionButton } from 'components/button/Button';

export default (props) => (
  <span>
    <div className='panel panel--accent'>
      <div className='panel__body paddingTop--xl paddingBottom--xl text--center'>
        <h4>To get started, click on the button below to generate an email address.</h4>
        <ActionButton type='blue' action={props.generate}>Generate Email Address</ActionButton>
      </div>
    </div>
  </span>
);
