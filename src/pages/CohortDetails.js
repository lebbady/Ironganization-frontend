import React, { Component } from 'react';
import CohortService from '../lib/cohort-service';
import StudentService from '../lib/student-service';
import { Link, Redirect } from 'react-router-dom';

class CohortDetails extends Component {
  state = {
    cohort: {},
    students: [],
    redirect: false
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

  deleteCohort = (event) => {
    event.preventDefault();
    CohortService.deleteCohort(this.props.match.params.cohortId)
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
    const cohort = this.state.cohort;
    const students =this.state.students;
    if(this.state.redirect){
      return <Redirect push to={`/homepage`}/>
    }
    return (
      <div className="details">
        <h2>Cohort details</h2>
        <p>{cohort.name}</p>
        <p>{cohort.language}</p>
        <p>{cohort.speciality}</p>
        <ul>
          {students.map((student) => {
            return <Link  key={student._id} to={`/students/${student._id}`}><li>{student.name}</li></Link>
          })}
        </ul>
        <Link to={`/cohorts/${this.props.match.params.cohortId}/edit`}>Edit Cohort</Link>
        <button className="button" onClick={this.deleteCohort}>Delete Cohort</button>
      </div>
    );
  }
}

export default CohortDetails;