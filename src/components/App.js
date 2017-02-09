import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import Nav from 'components/nav/Nav';
import Footer from 'components/footer/Footer';
import { checkLogin } from 'actions/auth';

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
        <div className='container container--tool'>
          {children}
        </div>
        <Footer></Footer>
        <Nav location={location}></Nav>
      </div>
    );
  }

}

const mapStateToProps = ({ auth }) => ({ loggedIn: auth.loggedIn });
export default connect(mapStateToProps, { checkLogin })(App);
