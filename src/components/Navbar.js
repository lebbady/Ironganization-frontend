import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/style.css';
import logo from '../images/logo.svg';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="nav-bar">
      <div className="iron-logo-div"><img className="iron-logo" src={logo} alt="logo ih"/></div>
      <p className="nav-element"><Link className="element-typo" to="/homepage">Home</Link></p> 
      <p className="nav-element"><Link className="element-typo" to="/students/create">New Student</Link></p>
      <p className="nav-element"><Link className="element-typo" to="/cohorts/create">Add New Cohort</Link></p>  
      <p className="nav-element element-typo" onClick={this.props.logout}>Logout</p>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div  className="nav-bar">
      <div className="iron-logo-div"><img className="iron-logo" src={logo} alt="logo ih"/></div>
      <p className="nav-element"><Link className="element-typo" to='/login'>Login</Link></p>
    </div>
  }

  render() {
    return (
      <div>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Navbar);