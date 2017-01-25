import React, { Component } from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';
import _ from 'lodash';

import { Logo } from 'components/logo/Logo';

import './Nav.scss';

class Nav extends Component {
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
    return (
      <div className='nav__right'>
        <a href='http://app.sparkpost.com/auth' className='nav__link'>Login</a>
        <a href='http://app.sparkpost.com/sign-up' className='button button--blue nav__button'>Sign Up</a>
      </div>
    );
  }

  renderLoggedInLinks() {
    return (
      <div className='nav__right'>
        <a href='' className='nav__link'>Logout</a>
        <a href='http://app.sparkpost.com/dashboard' className='button button--blue nav__button'>SparkPost Dashboard</a>
      </div>
    );
  }

  render() {
    const { loggedIn, path } = this.props;
    const { sticky, open } = this.state;
    const navClasses = classNames('nav', {
      'is-stickied': sticky,
      'is-open': open
    });

    const dkimLink = classNames('nav__link', { 'is-active': path.includes('/dkim')});

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
          </div>

        </div>
      </nav>
    );
  }
}

// I'm just preparing us for redux 😀
// Normally, default props would be set in redux's initial state
Nav.defaultProps = {
  loggedIn: false
};

Nav.propTypes = {
  loggedIn: React.PropTypes.bool.isRequired,
  path: React.PropTypes.string
};

export default Nav;
