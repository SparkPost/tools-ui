import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, FieldArray, reduxForm } from 'redux-form';

import validate from '../helpers/validate';
import { initialValues, ALL_TEXT } from '../constants';
import { TextInput, UseDefault, Hosts, Radio } from '../components/FormElements';
import IpRangesContainer from '../containers/IpRangesContainer';

class FormContainer extends Component {
  render() {
    const { form } = this.props;

    // Check if domain is valid
    const domain = form.syncErrors && form.syncErrors.domain ? 'your domain' : <strong>{form.values.domain}</strong>;

    return (
        <div className='col-xs-12 col-md-10 col-lg-7'>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>Enter your domain</h4>
              <Field name="domain" component={TextInput} placeholder='eg. mydomain.com' />
            </div>
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>MX Records</h4>
              <p>Which domain’s MX records should be allowed to send mail for {domain}? Learn more about the MX mechanism.</p>
            </div>
            <Field name="mx.useDefault" component={UseDefault} domain={domain}/>
            <FieldArray name="mx.hosts" component={Hosts} prefix='mx' />
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>A Records</h4>
              <p>Which domain’s A records should be allowed send mail for {domain}? Learn more about the A mechanism.</p>
            </div>
            <Field name="a.useDefault" component={UseDefault} domain={domain}/>
            <FieldArray name="a.hosts" component={Hosts} prefix='a' />
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>IP Network Ranges</h4>
              <p>Add IPv4 or IPv6 ranges in CIDR format that should be allowed to send for {domain}.</p>
            </div>
            <FieldArray name="ip" component={IpRangesContainer} />
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--xs'>Includes</h4>
              <p>Add any other domains whos SPF records should be included as part of {domain}’s SPF record, such as third party services.</p>
            </div>
            <FieldArray name="include" component={Hosts} prefix='include' />
          </div>

          <div className='panel'>
            <div className='panel__body'>
              <h4 className='marginBottom--none'>How Strict should this SPF Record Be?</h4>
              <p>This mechanism tells a recipients servers what to do to non-compliant messages.</p>
              <div className='button-group marginBottom--md marginLeft--none marginRight--none flex'>
                <Field name='all' component={Radio} label='Fail' />
                <Field name='all' component={Radio} label='Soft Fail'/>
              </div>
              <p>{ALL_TEXT[form.values.all]}</p>
            </div>
          </div>
        </div>
    );
  }
}


const mapStateToProps = ({ form }) => ({ form: form.spfBuilder });
export default reduxForm({
  form: 'spfBuilder',
  initialValues,
  validate
})(connect(mapStateToProps)(FormContainer));
