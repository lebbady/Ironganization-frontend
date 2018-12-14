import React, { Component } from 'react';
import CohortCard from '../components/CohortCard';
import { withAuth } from '../providers/AuthProvider';


class Homepage extends Component {
  

  

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.username}, homeee</h1>
        <CohortCard></CohortCard>
      </div>
    )
  }
}

export default withAuth(Homepage);
