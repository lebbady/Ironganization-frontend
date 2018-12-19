import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
class Login extends Component {
  state = {
    username: "",
    password: "",
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state

    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="login-form">
        <form onSubmit={this.handleFormSubmit}>
          <p className="login">Username</p>
          <p><input className="input" type="text" name="username" value={username} onChange={this.handleChange}/></p>
          <p className="login">Password</p>
          <p><input className="input" type="password" name="password" value={password} onChange={this.handleChange} /></p>
          <p><input className="button" type="submit" value="Login" /></p>
        </form>
      </div>
    )
  }
}

export default withAuth(Login);