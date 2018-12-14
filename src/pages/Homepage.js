import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import CohortService from '../lib/cohort-service';

class Private extends Component {
  state = {
    cohorts: [],
    error: null
  }

  componentDidMount() {
    CohortService.getAllCohorts()
    .then((cohorts) => {
      console.log('cohorts', cohorts)
      this.setState({
        cohorts
      })
      
    })
    .catch((error) => {
      this.setState({
        error,
      })
    })
  }

  render() {
    const {cohorts} = this.state;
    
    return (
      <div>
        <h1>Welcome {this.props.user.username}, homeee</h1>
        <ul>
          {cohorts.map((cohort) => {
            return <li key={cohort._id}>{cohort.name}</li>
          })}
        </ul>

      </div>
    )
  }
}

export default withAuth(Private);
