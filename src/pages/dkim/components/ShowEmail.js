import React from 'react';
import { Button } from 'components/button/Button';
import { CopyPopover } from 'components/popover/Popover';

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const { email } = props;

  return (
    <div className='panel panel--accent text--left'>
      <div className='panel__body'>
        <h4 className='marginBottom--xxs'>Validate your DKIM Signature</h4>
        <p className='paddingBottom--md'>Send an email to this generated email address, then view your results.</p>
        <div className='flex'>
          <div className='col-xs-12 col-md-8 col-lg-9'>
            <div className='input__group'>
              <input className='input__text input--full' type="text" readOnly={true} value={email} />
              <div className='input__buttonWrapper'>
                <CopyPopover placement='top' block={true} stringToCopy={email}>
                  <Button type='muted' fullWidth={true} track={true}>Copy</Button>
                </CopyPopover>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-md-4 col-lg-3 responsiveBump'>
            <Button type='orange' fullWidth={true} to={`/dkim/results/${email}`} track={true}>View Results</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
