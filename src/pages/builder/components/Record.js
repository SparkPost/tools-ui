import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ActionLink } from 'components/button/Button';
import { CopyPopover } from 'components/popover/Popover';
import buildRecord from 'helpers/spfBuilder';

class Record extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { form } = this.props;
    const record = buildRecord(form.values);

    return (
      <div className='col-xs-12 col-md-9'>
        <div className='panel panel--accent'>
          <div className='panel__body'>
            <div className='float--right'>
              <CopyPopover stringToCopy={record}><ActionLink>Copy</ActionLink></CopyPopover>
            </div>
            <h4 className='marginBottom--xs'>Go to your DNS Provider and Add this TXT Record</h4>
            <code className='marginBottom--xs'>{record}</code>
            <p>Once added to your DNS, inspect your SPF record to make sure it is valid.</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form: form.spfBuilder });
export default connect(mapStateToProps)(Record);
