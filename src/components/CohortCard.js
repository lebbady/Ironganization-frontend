import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';
import { Link } from 'react-router-dom';

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
                  <p>{cohort.name}, {cohort._id}</p>
                  <p>Speciality: {cohort.speciality}</p>
                  <p>Language: {cohort.language}</p>
                  <p>Category: {cohort.category}</p>
                  <p>Date: from {cohort.startingDate} to {cohort.endingDate}</p>

                </li>
            )
          })}
        </ul>
        <Link to="/cohorts/create">Add New Cohort</Link> 
      </div>
    );
  }
}

export default CohortCard;