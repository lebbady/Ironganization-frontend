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
    CohortService.editCohort({language, category, startingDate, endingDate}, this.props.match.params.cohortId)
    .then(() => {
      this.setState({
        language:"",
        category:"",
        startingDate:"" ,
        endingDate:""

      })
    })
    .catch( error => console.log(error) ); 
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }


  render() {
    const {language, category, startingDate, endingDate } = this.state;
    return (
      <div className="details">
        <h1>Edit this Cohort</h1>

        <form onSubmit={this.handleFormSubmit}>
          <p>Language</p>
          <select className="select" id="language" name="language" value={language} onChange={this.handleChange}>
            <option value="">- Select an option -</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
          </select>
          <p>Category</p>
          <select className="select" id="category" name="category" value={category} onChange={this.handleChange}>
            <option value="">- Select an option -</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
          <p>Starting date</p>
          <input className="input" type="text" name="startingDate" value={startingDate} onChange={this.handleChange}/>
          <p>Ending date</p>
          <input className="input" type="text" name="endingDate" value={endingDate} onChange={this.handleChange}/>
          <p><input className="button button-wide" type="submit" value="Edit Cohort" /></p>
        </form>
      </div>
    );
  }
}

export default CreateCohort;