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
import NotFound from './pages/NotFound';
import './stylesheets/style.css';
import CreateCohort from './pages/CreateCohort';
import CohortDetails from './pages/CohortDetails';
import NewStudent from './pages/NewStudent';


class App extends Component {
  
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <div>
            <Navbar className="nav-bar" />
          </div>
          
          <Switch>
              <Route exact path="/" component={Home} />
              {/* <AnonRoute path="/signup" component={Signup} /> */}
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/homepage" component={Homepage} />
              <PrivateRoute path="/cohorts/create" component={CreateCohort} />
              <PrivateRoute path="/cohorts/details" component={CohortDetails} />
              <PrivateRoute path="/students/create" component={NewStudent}/>
              <Route component={NotFound}/>
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
