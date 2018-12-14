import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
// import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import './stylesheets/style.css';


class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <h1>Basic React Authentication</h1>
          <div  >
            <Navbar className="nav-bar" />
          </div>
          
          <Switch>
              <Route exact path="/" component={Home} />
              {/* <AnonRoute path="/signup" component={Signup} /> */}
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Homepage} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
