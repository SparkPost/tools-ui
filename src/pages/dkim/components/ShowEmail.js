import React from 'react';
import { LinkButton } from 'components/button/Button';
import { CopyPopover } from 'components/popover/Popover';

import './ShowEmail.scss';

export default (props) => {
  const { email } = props;

  return (
    <div className='panel panel--accent text--left'>
      <div className='panel__body'>
        <h4>Validate your DKIM Signature</h4>
        <p className='paddingBottom--md text--muted'>Send an email to this generated email address, then view your results.</p>
        <div className='flex'>
          <div className='col-xs-12 col-md-8 col-lg-9'>
            <div className='input__group'>
              <input className='input__text input--full' type="text" readOnly={true} value={email} />
              <div className='input__buttonWrapper'>
                <CopyPopover placement='top' block={true} stringToCopy={email}>
                  <button className='button button--muted button--full'>Copy</button>
                </CopyPopover>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 col-lg-3 showEmail__bump'>
            <LinkButton type='orange' fullWidth={true} to={`/dkim/results/${email}`}>View Results</LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
