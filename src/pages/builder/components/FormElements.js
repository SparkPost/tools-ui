import React from 'react';
import { Field } from 'redux-form';
import { ActionLink, ActionButton } from 'components/button/Button';
import classnames from 'classnames';

import './FormElements.scss';

export const TextInput = ({ input, prefix, extraClasses, placeholder, meta: { touched, error } }) => {
  const groupClasses = classnames('input__group', {
    [`builder-inputGroup--${prefix}`]: prefix,
    'has-error': touched && error
  });
  return (
    <div className={groupClasses}>
      <input {...input} placeholder={placeholder} type='text' className={`input__text builder-input ${extraClasses}`} autoFocus />
      {prefix && <span className='input__prefix'>{prefix}:</span>}
      {touched && (error && <span className='input__error'>{error}</span>)}
    </div>
  );
};

export const UseDefault = ({ input, domain }) => (
  <div className='panel__body'>
    <div className='flex middle-xs'>
      <div className='col-xs-9'>
        {domain !== 'your domain' && <h6 className='marginBottom--none'>{domain}</h6>}
        <p className='builder-smalltext marginBottom--none'>Current Domain</p>
      </div>
      <div className='col-xs-3 text--right'>
        <ActionLink onClick={() => input.onChange(!input.value)}>{!input.value ? 'Add' : 'Remove'}</ActionLink>
        {/* <input {...input} type='checkbox'/> */}
      </div>
    </div>
  </div>
);

const Host = ({ host, prefix, onRemove }) => (
  <div className='panel__body panel__body--forceBorder'>
    <div className='flex middle-xs'>
      <div className='col-xs-9'>
        <Field name={`${host}.name`} component={TextInput} prefix={prefix} extraClasses='builder-input--ghost'/>
      </div>
      <div className='col-xs-3 text--right'>
        <ActionLink onClick={onRemove}>Remove</ActionLink>
      </div>
    </div>
  </div>
);

export const Hosts = ({ fields, prefix = '' }) => (
  <div>
    {fields.map((host, index) => <Host key={index} host={host} prefix={prefix} index={index} onRemove={() => fields.remove(index)}/>)}
    <div className='panel__body panel__body--forceBorder clearfix'>
      <div className='float--right'>
        <ActionLink onClick={() => fields.push({})}>Add Host</ActionLink>
      </div>
    </div>
  </div>
);

export const Radio = ({ input, label }) => {
  const buttonClasses = classnames('button col-xs marginRight--none padding--none', {
    'button--orange is-pressed': input.value === label,
    'button--muted': input.value !== label
  });
  return <ActionButton action={() => input.onChange(label)} extraClasses={buttonClasses}>{label}</ActionButton>;
};

export const IpRange = ({ host, prefix, onRemove }) => (
  <div className='panel__body panel__body--forceBorder'>
    <div className='flex middle-xs'>
      <div className='col-xs-3'>
        <div className='button-group margin--none flex'>
          <Field name={`${host}.type`} component={Radio} label='ip4' />
          <Field name={`${host}.type`} component={Radio} label='ip6' />
        </div>
      </div>
      <div className='col-xs-7'>
        <Field name={`${host}.address`} component={TextInput} prefix={prefix} extraClasses='builder-input--ghost'/>
      </div>
      <div className='col-xs-2 text--right paddingLeft--none'>
        <ActionLink onClick={onRemove}>Remove</ActionLink>
      </div>
    </div>
  </div>
);
