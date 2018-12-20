import React, { Component } from 'react';
import logo from '../images/logo.svg';

class Home extends Component {
  render() {
    return (
      <div className="landing-page">
        <img className="landing-page-image" src={logo} alt="logo ih"/>
        
      </div>
    );
  }
}

export default Home;