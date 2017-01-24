import React from 'react';
import { ActionButton } from 'components/button/Button';
import ErrorMessage from 'components/errors/ErrorMessage';

const errorText = 'Sorry, something happened and we couldn\'t generate an address.';

export default (props) => (
  <span>
    {props.error && <ErrorMessage friendly={errorText} />}
    <div className='panel panel--accent'>
      <div className='panel__body paddingTop--xl paddingBottom--xl text--center'>
        <h4>To get started, click on the button below to generate an email address.</h4>
        <ActionButton type='blue' action={props.generate}>Generate Email Address</ActionButton>
      </div>
    </div>
  </span>
);
