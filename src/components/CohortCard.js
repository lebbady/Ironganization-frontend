import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';

class CohortCard extends Component {
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
        <ul>
          {cohorts.map((cohort) => {
            console.log(cohort._id)
            return (
                <li key={cohort._id}>
                  <div  className="cohort-card-up">
                    <p>{cohort.speciality} {cohort.name}</p>
                    <p>{cohort.category}</p>
                    <p>Language: {cohort.language}</p>
                  </div>
                  <div  className="cohort-card-down">
                    <p>Date: from {cohort.startingDate} to {cohort.endingDate}</p>
                  </div>
                </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CohortCard;