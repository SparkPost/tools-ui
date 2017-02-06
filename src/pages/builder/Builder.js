import React, { Component } from 'react';

import Record from './components/Record';
import Form from './components/Form';
import { INTRO_TEXT } from './constants';

const intialState = {
  domain: 'domain.com',
  mx: {
    useDefault: true,
    hosts: [
      'example.mydomain.com/24'
    ]
  },
  a: {
    useDefault: true,
    hosts: [
      'example.mydomain.com/24'
    ]
  },
  ip: [
    {
      type: 'ip4',
      address: '38.95.177.2'
    }
  ],
  include: [
    'domain.com',
    'google.com'
  ],
  all: 'dasf'
};


class Builder extends Component {
  constructor(props) {
    super(props);

    this.state = intialState;
  }

  render() {
    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10 col-lg-7'>
          <h1>SPF Builder</h1>
          <p className='marginBottom--lg'>{INTRO_TEXT}</p>
        </div>
        <Form />
        <Record {...this.state} />
      </div>
    );
  }
}

export default Builder;
