import React from 'react';
import Nav from 'components/nav/Nav';
import Footer from 'components/footer/Footer';

export default (props) => (
  <div className='pageWrapper'>
    <div className='container container--tool'>
      {props.children}
    </div>
    <Footer></Footer>
    <Nav path={props.location.pathname}></Nav>
  </div>
);
