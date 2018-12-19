import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
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
import StudentDetails from './pages/StudentDetails';
import EditCohort from './pages/EditCohort';


class App extends Component {
  
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <div>
            <Navbar className="nav-bar" />
          </div>
          <div className="main-content">
            <Switch>
                <Route exact path="/" component={Home} />
                <AnonRoute path="/login" component={Login} />
                <PrivateRoute path="/homepage" component={Homepage} />
                <PrivateRoute path="/cohorts/create" component={CreateCohort} />
                <PrivateRoute exact path="/cohorts/:cohortId" component={CohortDetails} />
                <PrivateRoute path="/cohorts/:cohortId/edit" component={EditCohort} />
                <PrivateRoute path="/students/create" component={NewStudent}/>
                <PrivateRoute path="/students/:studentId" component={StudentDetails}/>
                <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
