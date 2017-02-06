import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { form } = this.props;
    const domain = form && form.values ? form.values.domain : 'your domain';

    return (
        <div className='col-xs-12 col-md-10 col-lg-7'>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>Enter your domain</h4>
              <Field name="domain" component="input" type="text" />
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>MX Records</h4>
              <p>Which domain’s MX records should be allowed to send mail for {domain}? Learn more about the MX mechanism.</p>
              <Field name="addMX" component="input" type="text" />
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>A Records</h4>
              <p>Which domain’s A records should be allowed send mail for mydomain.com? Learn more about the A mechanism.</p>
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>IP Network Ranges</h4>
              <p>Add IPv4 or IPv6 ranges in CIDR format that should be allowed to send for mydomain.com</p>
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>Includes</h4>
              <p>Add any other domains whos SPF records should be included as part of mydomain.com’s SPF record, such as third party services.</p>
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--none'>How Strict should this SPF Record Be?</h4>
              <p>This mechanism tells a recipients servers what to do to non-compliant messages.</p>
            </div>
          </div>

        </div>
    );
  }
}

const mapStateToProps = ({ form }) => ({ form: form.spfBuilder });

export default reduxForm({
  form: 'spfBuilder' // a unique name for this form
})(connect(mapStateToProps)(Form));
