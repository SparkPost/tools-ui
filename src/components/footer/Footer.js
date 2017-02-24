import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { trackButtonClick } from 'actions/mixpanel';
import { Logo } from 'components/logo/Logo';
import { CTA, LINKS } from 'components/footer/constants';
import { getQueryParams } from 'helpers/url';

import './Footer.scss';

export class Footer extends Component {

  render() {
    const { loggedIn } = this.props;
    const signUpUrl = `http://app.sparkpost.com/sign-up?${getQueryParams(location)}`;
    const handleClick = () => trackButtonClick('Sign Up', 'Footer');

    return (
      <div className={classnames('footer', { 'footer--loggedIn': loggedIn })}>
        <div className='container'>

          {!loggedIn &&
          <div className='flex paddingTop--xxl paddingBottom--xxl'>
            <div className='col-xs-12 col-md-8'>
              <h1>{CTA.header}</h1>
              <p className='marginBottom--lg'>{CTA.text}</p>
              <a href={signUpUrl} onClick={handleClick} title='SparkPost' className='button button--l button--blue'>{CTA.button}</a>
            </div>
          </div>}

          <nav className='footer__nav'>
            <a href='http://sparkpost.com' className='footer__logoLink' title='SparkPost'>
              <Logo type={loggedIn ? 'default' : 'white'} />
            </a>
            <div className='float--right'>
              {LINKS.map(({ url, label }, key) => <a href={url} title={label} key={key} className='footer__link'>{label}</a>)}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
export default connect(mapStateToProps, { trackButtonClick })(Footer);
