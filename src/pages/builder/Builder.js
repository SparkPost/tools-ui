import React, { Component } from 'react';

import Record from './components/Record';
import Form from './components/Form';
import { INTRO_TEXT } from './constants';

class Builder extends Component {
  constructor(props) {
    super(props);
  }

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
