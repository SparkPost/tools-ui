import React, { Component } from 'react';

import Record from './containers/RecordContainer';
import Form from './containers/FormContainer';
import { INTRO_TEXT } from './constants';

class Builder extends Component {
  render() {
    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10 col-lg-7'>
          <h1>SPF Builder</h1>
          <p className='marginBottom--lg'>{INTRO_TEXT}</p>
        </div>
        <Form />
        <Record />
      </div>
    );
  }
}

export default Builder;
