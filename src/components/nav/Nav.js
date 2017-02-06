import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classNames from 'classnames';
import _ from 'lodash';
import { SpLoginLink, SpSignUpLink } from 'components/button/Button';
import config from 'config/index';
import { logout } from 'actions/auth';

import { Logo } from 'components/logo/Logo';

import './Nav.scss';

export class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false,
      open: false
    };

    this.handleScroll = _.throttle(this.handleScroll.bind(this), 400);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e) {
    this.setState({
      sticky: e.srcElement.body.scrollTop !== 0
    });
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  renderLoggedOutLinks() {
    const { location } = this.props;
    return (
      <div className='nav__right'>
        <SpLoginLink location={location} classes='nav__link'>Login</SpLoginLink>
        <SpSignUpLink location={location} classes='button button--blue nav__button'>Sign Up</SpSignUpLink>
      </div>
    );
  }

  renderLoggedInLinks() {
    return (
      <div className='nav__right'>
        <button className='nav__link button--link' onClick={() => this.props.logout()}>Logout</button>
        <a href={`${config.appUrl}/dashboard`} className='button button--blue nav__button'>SparkPost Dashboard</a>
      </div>
    );
  }

  render() {
    const { loggedIn, location } = this.props;
    const { sticky, open } = this.state;
    const navClasses = classNames('nav', {
      'is-stickied': sticky,
      'is-open': open
    });

    const dkimLink = classNames('nav__link', { 'is-active': location.pathname.includes('/dkim')});
    const inspectorLink = classNames('nav__link', { 'is-active': location.pathname.includes('/spf/inspector')});
    const builderLink = classNames('nav__link', { 'is-active': location.pathname.includes('/spf/builder')});

    return (
      <nav className={navClasses}>
        <div className='container'>

          {loggedIn ? this.renderLoggedInLinks() : this.renderLoggedOutLinks()}

          <a href='http://sparkpost.com' className='nav__logoLink' title='SparkPost'>
            <Logo/>
          </a>

          <a className='nav__hamburger' onClick={() => this.toggleMenu()}><span></span></a>

          <div className='nav__links'>
            <Link
              to='/dkim'
              title='DKIM Validator'
              className={dkimLink}>
              DKIM Validator
            </Link>

            <Link
              to='/spf/inspector'
              title='SPF Inspector'
              className={inspectorLink}>
              SPF Inspector
            </Link>

            <Link
              to='/spf/builder'
              title='SPF Builder'
              className={builderLink}>
              SPF Builder
            </Link>
          </div>

        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });

export default connect(mapStateToProps, { logout })(Nav);
