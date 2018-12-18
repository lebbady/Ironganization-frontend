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
            return (
              <Link key={cohort._id} className="cohort-card-link" to={`/cohorts/${cohort._id}`}>
                <li>
                  <div  className="cohort-card-up">
                    <p>{cohort.speciality} {cohort.name}</p>
                    <p>{cohort.category}</p>
                    <p>Language: {cohort.language}</p>
                  </div>
                  <div  className="cohort-card-down">
                    <p>Date: from {cohort.startingDate} to {cohort.endingDate}</p>
                  </div>
                </li>
              </Link>
                
            )
          })}
        </ul>
      </div>
    );
  }
}

export default CohortCard;