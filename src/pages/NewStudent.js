import React, { Component } from 'react';
import StudentService from '../lib/student-service';

class NewStudent extends Component {
  state = {
    name:"",
    surname:"",
    selectedFile:null ,
    preworkStatus:"",
    preworkLevel:"",
    projectDifficulty:"",
    projectQuality:"",
    projectDeployLink:"",
    projectPresentationLink:""
  }

  handleFormSubmit = (event) => {
    const { name, surname, pictureUrl, preworkStatus,preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink  } = this.state;
    event.preventDefault();
    StudentService.createStudent({ name, surname, pictureUrl, preworkStatus,preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink  })
      .then(() => {
        this.setState({
          name:"",
          surname:"",
          pictureUrl:"" ,
          preworkStatus:"",
          preworkLevel:"",
          projectDifficulty:"",
          projectQuality:"",
          projectDeployLink:"",
          projectPresentationLink:""

      })
      .catch( error => console.log(error) ); 
    })
  }

  handleChange = (event) => {  
    // const data = new FormData(event.target);

    // const [month, day, year] = data.split('/');
    // const serverDate = `${year}-${month}-${day}`;
    console.log(event.target);

    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0];
    })
    console.log(event.target.files[0]);
  }

  fileUploadHandler = () => {

  }

  render() {
    const { name, surname, pictureUrl, preworkStatus, preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink  } = this.state;
    return (
      <div>
        <h1>Create A New Student</h1>

        <form onSubmit={this.handleFormSubmit}>
          <p>Name</p>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <p>Surname</p>
          <input type="text" name="surname" value={surname} onChange={this.handleChange}/>
          <p>Picture Url</p>
          <input type="file" onChange={this.fileSelectedHandler}/>
          <button onClick={this.fileUploadHandler}>Upload Picture</button>
          <p>Prework</p>
          <p>Prework status</p>
          <select id="status" name="preworkStatus" value={preworkStatus} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Done">Done</option>
            <option value="Not done">Not done</option>
          </select>
          <p>Prework level</p>
          <select id="level" name="preworkLevel" value={preworkLevel} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project</p>
          <p>Project level</p>
          <select id="difficulty" name="projectDifficulty" value={projectDifficulty} onChange={this.handleChange}>
            <option value="">- Select one option -</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project quality</p>
          <select id="quality" name="projectQuality" value={projectQuality} onChange={this.handleChange}>
            <option value="">- Select one option -</option> 
            <option value="Bad">Bad</option>
            <option value="Medium">Medium</option>
            <option value="Good">Good</option>
          </select>
          <p>Project presentation link</p>
          <input type="text" value={projectPresentationLink} onChange={this.handleChange}/>
          <p>Project deploy link</p>
          <input type="text" value={projectDeployLink} onChange={this.handleChange}/>
          <input type="submit" value="Create New Student" />
        </form>
      </div>
    );
  }
}

export default NewStudent;
