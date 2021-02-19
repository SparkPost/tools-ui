import React from 'react';
import { Button } from 'components/button/Button';

export default (props) => (
  <span>
    {/* will use for the major version upgrade in the following days/weeks FE-1350 */}
    {/* <div style={{ background: '#fa6423', color: '#fff', padding: '15px' }}>
      Sorry, this tool is down for a scheduled maintenance right now. Please check back in a little bit.
    </div> */}
    <div className='panel panel--accent'>
      <div className='panel__body paddingTop--xl paddingBottom--xl text--center'>
        <h4>To get started, click on the button below to generate an email address.</h4>
        <Button type='blue' action={props.generate} track={true}>Generate Email Address</Button>
      </div>
    </div>
  </span>
);
