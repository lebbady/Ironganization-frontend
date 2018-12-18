import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';
import StudentService from '../lib/student-service';

class CohortDetails extends Component {
  state = {
    cohort: {},
    students: []
  }

  componentDidMount() {
    CohortService.getCohortById(this.props.match.params.cohortId)
    .then((cohort) => {
      this.setState({
        cohort
      }) 
    })
    .catch((error) => {
      this.setState({
        error,
      })
    })

    StudentService.getStudents(this.props.match.params.cohortId)
    .then((students) => {
      this.setState({
        students
      })
    })
    .catch((error) => {
      this.setState({
        error,
      })
    }) 
  }

  render() {
    const cohort = this.state.cohort;
    const students =this.state.students;
    return (
      <div>
        <h2>Cohort details</h2>
        <p>{cohort.name}</p>
        <p>{cohort.language}</p>
        <p>{cohort.speciality}</p>
        <ul>
          {students.map((student) => {
            return <li key={student._id}>{student.name}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default CohortDetails;