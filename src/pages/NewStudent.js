import React, { Component } from 'react';
import StudentService from '../lib/student-service';

class NewStudent extends Component {
  state = {
    name:"",
    surname:"",
    preworkStatus:"",
    preworkLevel:"",
    projectDifficulty:"",
    projectQuality:"",
    projectDeployLink:"",
    projectPresentationLink:"",
    cohortId: null,
    cohorts: []
  }

  handleFormSubmit = (event) => {
    const { name, surname, preworkStatus,preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink, cohortId  } = this.state;
    event.preventDefault();
    StudentService.createStudent({ name, surname, preworkStatus,preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink, cohortId  })
      .then(() => {
        this.setState({
          name:"",
          surname:"",
          preworkStatus:"",
          preworkLevel:"",
          projectDifficulty:"",
          projectQuality:"",
          projectDeployLink:"",
          projectPresentationLink:"",
          cohortId: null
        })
      })
      .catch( error => console.log(error) );
  }


  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  componentDidMount() {
    StudentService.getAllCohorts()
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
    const { name, surname, preworkStatus, preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink, cohorts  } = this.state;
    return (
      <div className="create-student-profile">
        <h1>Create A New Student</h1>

        <form onSubmit={this.handleFormSubmit}>
          <p>Name</p>
          <input className="input" type="text" name="name" value={name} onChange={this.handleChange} />
          <p>Surname</p>
          <input className="input" type="text" name="surname" value={surname} onChange={this.handleChange}/>
          <p>Prework</p>
          <p>Prework status</p>
          <select className="select" id="status" name="preworkStatus" value={preworkStatus} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Done">Done</option>
            <option value="Not done">Not done</option>
          </select>
          <p>Prework level</p>
          <select className="select" id="level" name="preworkLevel" value={preworkLevel} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project</p>
          <p>Project level</p>
          <select className="select" id="difficulty" name="projectDifficulty" value={projectDifficulty} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project quality</p>
          <select className="select" id="quality" name="projectQuality" value={projectQuality} onChange={this.handleChange}>
            <option value="">- Select one option -</option> 
            <option value="Bad">Bad</option>
            <option value="Medium">Medium</option>
            <option value="Good">Good</option>
          </select>
          <p>Project presentation link</p>
          <input className="input" type="text" value={projectPresentationLink} onChange={this.handleChange}/>
          <p>Project deploy link</p>
          <input className="input" type="text" value={projectDeployLink} onChange={this.handleChange}/>
          <p>Cohort</p>
          <select className="select" name="cohortId" id="cohortId" onChange={this.handleChange}>
            <option value="">- Select one option -</option> 
            {cohorts.map((cohort) => {
              return <option key={cohort._id} value={cohort._id}>{cohort.name}{cohort.speciality}{cohort.language}</option>
            })}
          </select>
          <p><input className="button-wide button" type="submit" value="Create New Student" /></p>
        </form>
      </div>
    );
  }
}

export default NewStudent;
