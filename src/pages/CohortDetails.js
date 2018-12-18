import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';

class CohortDetails extends Component {
  state = {
    cohort: {}
  }

  componentDidMount() {
    CohortService.getCohortById(this.props.match.params.cohortId)
    .then((cohort) => {
      console.log('cohorts', cohort)
      this.setState({
        cohort
      }) 
    })
    .catch((error) => {
      this.setState({
        error,
      })
    })
  }

  render() {
    const cohort = this.state.cohort;
    return (
      <div>
        <h2>Cohort details</h2>
        <p>{cohort.name}</p>
        <p>{cohort.language}</p>
        <p>{cohort.speciality}</p> 
      </div>
    );
  }
}

export default CohortDetails;