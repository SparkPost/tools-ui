import React, { Component } from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import config from 'config/index';
import { INTRO_TEXT, COOKIE_NAME } from './constants';
import { ActionButton } from 'components/button/Button';
import ShowEmail from 'components/dkim/ShowEmail';
import GenerateEmail from 'components/dkim/GenerateEmail';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: cookie.get(COOKIE_NAME) || null,
      loading: false
    };
  }

  setDkimCookie(email) {
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    cookie.set(COOKIE_NAME, email, { expires });
  }

  // redux
  generate() {
    this.setState({ loading: true, error: null });
    axios.post(`${config.apiBase}/messaging-tools/validator-emails`)
      .then(({ data }) => {
        const { email } = data.results;
        this.setDkimCookie(email);
        this.setState({
          email: data.results.email,
          loading: false
        });
      }, () => {
        this.setState({
          error: true,
          loading: false
        });
      });
  }

  deleteCookie() {
    cookie.remove(COOKIE_NAME);
    this.setState({ email: null });
  }

  renderDeleteCookie() {
    return (
      <div className='for-testing-only-DUH'>
        <br/><br/>
        <ActionButton type='red' size='s' action={() => this.deleteCookie()}>Delete my email cookie and start over</ActionButton>
      </div>
    );
  }

  renderLoading() {
    return (
      <div className='panel panel--accent'>
        <div className='panel__body text--center'>
          <p className='text--regular text--muted paddingTop--xl paddingBottom--xl'>Generating Email Address...</p>
        </div>
      </div>
    );
  }

  renderGenerateOrEmail() {
    const { email, error } = this.state;
    return email ? <ShowEmail email={email} /> : <GenerateEmail generate={() => this.generate()} error={error} />;
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='flex center-xs'>
        <div className='col-xs-12 col-md-10 col-lg-8'>
          <h1>DKIM Validator</h1>
          <p className='marginBottom--lg'>{INTRO_TEXT}</p>
          {loading ? this.renderLoading() : this.renderGenerateOrEmail()}
          {process.env.NODE_ENV === 'development' && this.renderDeleteCookie()}
        </div>
      </div>
    );
  }
}
