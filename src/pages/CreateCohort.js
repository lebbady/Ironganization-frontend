import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';

class CreateCohort extends Component {
  state = {
    language:"",
    category:"",
    startingDate:"" ,
    endingDate:""
  }

  handleFormSubmit = (event) => {
    const {language, category, startingDate, endingDate} = this.state;
    console.log(language, category, startingDate, endingDate);
    event.preventDefault();
    CohortService.createCohort({language, category, startingDate, endingDate})
      .then(() => {
        this.setState({
          language:"",
          category:"",
          startingDate:"" ,
          endingDate:""

      })
      .catch( error => console.log(error) ); 
    })
  }

  handleChange = (event) => {  
    // const data = new FormData(event.target);

    // const [month, day, year] = data.split('/');
    // const serverDate = `${year}-${month}-${day}`;

    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    const {language, category, startingDate, endingDate } = this.state;
    return (
      <div>
        <h1>Create A New Web Cohort</h1>

        <form onSubmit={this.handleFormSubmit}>
          <select id="language" name="language" value={language} onChange={this.handleChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <select id="category" name="category" value={category} onChange={this.handleChange}>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <p>Starting date</p>
          <input type="date" value={startingDate} onChange={this.handleChange}/>
          <p>Ending date</p>
          <input type="date" value={endingDate} onChange={this.handleChange}/>
          <input type="submit" value="Create New Cohort" />
        </form>
      </div>
    );
  }
}

export default CreateCohort;