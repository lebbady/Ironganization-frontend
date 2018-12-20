import React, { Component } from 'react';
import StudentService from '../lib/student-service';
import {Redirect, Link} from 'react-router-dom';

class StudentDetails extends Component {
  state = {
    student: {},
    redirect: false
  }

  componentDidMount() {
    StudentService.getStudentById(this.props.match.params.studentId)
    .then((student) => {
      this.setState({
        student
      })
    })
    .catch((error) => {
      this.setState({
        error,
      })
    }) 
  }

  deleteStudent = (event) => {
    event.preventDefault();
    StudentService.deleteStudent(this.props.match.params.studentId)
    .then(() => {
      this.setState({
        redirect: true
      })  
    })
    .catch((error) => {
      this.setState({
        error,
      })
    })
  }

  render() {
    const {student} = this.state;
    if(this.state.redirect){
      return <Redirect push to={`/cohorts/${student.cohortId}`}/>
    }
    return (
      <div className="details">
        <h2>Student Details</h2>
        <div className="student-details">
          <p>{student.name}</p>
          <p>{student.surname}</p>
          <p><b>Prework Status:</b>{student.preworkStatus}</p>
          <p><b>Prework Level:</b>{student.preworkLevel}</p>
          <p><b>Project Difficulty:</b>{student.projectDifficulty}</p>
          <p><b>Project Difficulty:</b>{student.projectLevel}</p>
          <p><b>Project Deploy Link:</b>{student.projectDeployLink}</p>
          <p><b>Project Presentation Link:</b>{student.projectPresentationLink}</p>
        </div>
        <Link className="button text-deco block" to={`/students/${this.props.match.params.studentId}/edit`}>Edit</Link>
        <button className="button delete" onClick={this.deleteStudent}>Delete</button>
      </div>
    );
  }
}
export default StudentDetails;