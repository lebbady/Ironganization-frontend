import React, { Component } from 'react';
import StudentService from '../lib/student-service';

class NewStudent extends Component {
  state = {
    name:"",
    surname:"",
    pictureUrl:"" ,
    prework: {
      status:"Done",
      level:"Medium"
    },
    project: {
      difficulty:"High",
      quality:"Medium",
      deployLink:"",
      presentationLink:""
    }
  }

  handleFormSubmit = (event) => {
    const { name, surname, pictureUrl, prework: { status, level}, project: { difficulty, quality, deployLink, presentationLink} } = this.state;
    event.preventDefault();
    StudentService.createStudent({ name, surname, pictureUrl, prework: { status, level}, project: { difficulty, quality, deployLink, presentationLink} })
      .then(() => {
        this.setState({
          name:"",
          surname:"",
          pictureUrl:"" ,
          prework: {
            status:"",
            level:""
          },
          project: {
            difficulty:"",
            quality:"",
            deployLink:"",
            presentationLink:""
          }

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
    const { name, surname, pictureUrl, prework: { status, level}, project: { difficulty, quality, deployLink, presentationLink} } = this.state;
    return (
      <div>
        <h1>Create A New Student</h1>

        <form onSubmit={this.handleFormSubmit}>
          <p>Name</p>
          <input type="text" name="name" value={name} onChange={this.handleChange} />
          <p>Surname</p>
          <input type="text" name="surname" value={surname} onChange={this.handleChange}/>
          <p>Picture Url</p>
          <input type="text" name="pictureUrl" value={pictureUrl} onChange={this.handleChange}/>
          <p>Prework</p>
          <p>Prework status</p>
          <select id="status" name="status" value={status} onChange={this.handleChange}>
            <option value="Done">Done</option>
            <option value="Not done">Not done</option>
          </select>
          <p>Prework level</p>
          <select id="level" name="level" value={level} onChange={this.handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project</p>
          <p>Project level</p>
          <select id="difficulty" name="difficulty" value={difficulty} onChange={this.handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project quality</p>
          <select id="quality" name="quality" value={quality} onChange={this.handleChange}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <p>Project presentation link</p>
          <input type="text" value={presentationLink} onChange={this.handleChange}/>
          <p>Project deploy link</p>
          <input type="text" value={deployLink} onChange={this.handleChange}/>
          <input type="submit" value="Create New Student" />
        </form>
      </div>
    );
  }
}

export default NewStudent;