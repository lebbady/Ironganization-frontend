import React, { Component } from 'react';

class CreateCohort extends Component {
  render() {
    return (
      <div>
        <h1>Create A New Web Cohort</h1>

        <form action="">
          <select id="language" name="language">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
          <select id="category" name="category">
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <input type="date"/>
          <input type="date"/>
        </form>

        <div class="field submit">
          <button type="submit">Create Cohort</button>
        </div>
      </div>
      
    );
  }
}

export default CreateCohort;