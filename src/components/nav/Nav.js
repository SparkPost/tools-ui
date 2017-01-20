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
      sticky: false
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

  renderLoggedOutLinks() {
    return (
      <div className='float--right'>
        <a href='http://app.sparkpost.com/auth' className='nav__link'>Login</a>
        <a href='http://app.sparkpost.com/sign-up' className='button button--blue nav__button'>Sign Up</a>
      </div>
    );
  }

  renderLoggedInLinks() {
    return (
      <div className='float--right'>
        <a href='' className='nav__link'>Logout</a>
        <a href='http://app.sparkpost.com/dashboard' className='button button--blue nav__button'>SparkPost Dashboard</a>
      </div>
    );
  }

  render() {
    const { loggedIn, path } = this.props;
    const { sticky } = this.state;
    const navClasses = classNames('nav', {
      'nav--sticky': sticky
    });

    return (
      <nav className={navClasses}>
        <div className='container'>
          <a href='http://sparkpost.com' className='nav__logoLink' title='SparkPost'>
            <Logo/>
          </a>

          <Link
            to='/dkim'
            title='DKIM Validator'
            className={`nav__link ${path.includes('/dkim') && 'is-active'}`}>
            DKIM Validator
          </Link>

          {loggedIn ? this.renderLoggedInLinks() : this.renderLoggedOutLinks()}
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
