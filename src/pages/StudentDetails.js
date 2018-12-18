import React, { Component } from 'react';
import StudentService from '../lib/student-service';
import {Redirect} from 'react-router-dom';

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
    .then((result) => {
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
        <p>{student.name}</p>
        <p>{student.surname}</p>
        <button className="button-wide button" onClick={this.deleteStudent}>Delete Student</button>
      </div>
    );
  }
}

export default StudentDetails;