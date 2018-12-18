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


  // createPhone(data) {
  //   this.apiInstance.post('/phones', data)
  // }

  // updatePhone(id, data) {
  //   return this.apiInstance.put(`/phones/${id}`, data)
  //   .then((response) =>{
  //     return response.data
  //   })
  // }

  // deletePhone(id, data) {
  //   return this.apiInstance.delete(`/phones/${id}`, data)
  //   .then((response) =>{
  //     return response.data
  //   })
  // }


}

const StudentService = new StudentApi();

export default StudentService;