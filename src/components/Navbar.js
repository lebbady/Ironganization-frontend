import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../stylesheets/style.css';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="nav-bar">
      {/* <p className="nav-element">username: {this.props.user.username}</p> */}
      <p className="nav-element element-typo" onClick={this.props.logout}>Logout</p>
      <p className="nav-element"><Link className="element-typo" to="/students/create">New Student</Link></p>
      <p className="nav-element"><Link className="element-typo" to="/homepage">Cohorts</Link></p>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div  className="nav-bar">
      <p><Link to='/login'>Login</Link></p>
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