import axios from 'axios';

class StudentApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
    });
  }


  createStudent (student) {
    const { name, surname, pictureUrl, preworkStatus, preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink, cohortId  } = student;
    return this.apiInstance.post('/students/create', { name, surname, pictureUrl, preworkStatus, preworkLevel, projectDifficulty, projectQuality, projectDeployLink, projectPresentationLink, cohortId  })
      .then(({ data }) => data);
  }

  getAllCohorts() {
    return this.apiInstance.get('/students/create')
    .then((response) => {
      return response.data
    })
  }

  getStudents(cohortId) {
    return this.apiInstance.get(`/cohorts/${cohortId}`)
    .then((response) => {
      return response.data
    })
  }

  getStudentById (studentId) {
    return this.apiInstance.get(`/students/${studentId}`)
    .then((response) => {
      return response.data
    })
  }

  deleteStudent (studentId) {
    return this.apiInstance.delete(`/students/${studentId}`)
    .then((response) => {
      return response.data
    })
  }

  editStudent (student ,studentId) {
    return this.apiInstance.put(`/students/${studentId}/edit`, student)
    .then((response) => {
      return response.data
    })
  }
}

const StudentService = new StudentApi();

export default StudentService;