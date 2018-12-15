import React, { Component } from 'react';

class NewStudent extends Component {
  render() {
    return (
      <div>
        <h1>Create A New Student</h1>

        <form action="">
          <select id="language" name="language">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
          <select id="category" name="category">
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <p>Starting date</p>
          <input type="date"/>
          <p>Ending date</p>
          <input type="date"/>
        </form>

        <div className="field submit">
          <button type="submit">Create Cohort</button>
        </div>
      </div>
    );
  }
}

export default NewStudent;