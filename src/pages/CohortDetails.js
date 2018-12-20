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
    const students =this.state.students;
    if(this.state.redirect){
      return <Redirect push to={`/homepage`}/>
    }
    return (
      <div className="details">
        <h2>Cohort details</h2>
        <ul>
          {students.map((student) => {
            return  ( 
                  <p className="student-card">
                    <Link className="link-deco" key={student._id} to={`/students/${student._id}`}>
                      <span className="student-info">{student.name} {student.surname}</span>
                      <span className="student-info"><b>Prework Status:</b> {student.preworkStatus}</span>
                      <span className="student-info"><b>Prework Level:</b> {student.preworkLevel}</span>
                    </Link>
                  </p>
            )
          })}
        </ul>
        <Link className="button text-deco block" to={`/cohorts/${this.props.match.params.cohortId}/edit`}>Edit</Link>
        <button className="button delete" onClick={this.deleteCohort}>Delete</button>
      </div>
    );
  }
}

export default CohortDetails;