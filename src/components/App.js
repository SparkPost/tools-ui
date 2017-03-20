import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Nav from 'components/nav/Nav';
import Footer from 'components/footer/Footer';
import { Meta, DefaultMeta } from 'components/Meta';
import { checkLogin } from 'actions/auth';
import { trackPageView } from 'actions/mixpanel';

export class App extends Component {

  // need to use this lifecycle stage to make sure that
  // the cookie is read/token in place in time
  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    const { children, location, loggedIn } = this.props;
    return (
      <div className={classnames('pageWrapper', { 'pageWrapper--loggedIn': loggedIn })}>
        <DefaultMeta />
        <Meta location={location} />
        <div className='container container--tool'>
          {children}
        </div>
        <Footer />
        <Nav location={location} />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
export default connect(mapStateToProps, { checkLogin, trackPageView })(App);
