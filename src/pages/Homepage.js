import React, { Component } from 'react';
import CohortCard from '../components/CohortCard';
import { withAuth } from '../providers/AuthProvider';


class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="homepage-title">
          <h1>Cohorts</h1>
        </div>
        <CohortCard></CohortCard>
      </div>
    )
  }
}

export default withAuth(Homepage);
