import axios from 'axios';

class CohortApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
      withCredentials: true
    });
  }


  getAllCohorts() {
    return this.apiInstance.get('/cohorts')
    .then((response) => {
      return response.data
    })
  }

  createCohort (cohort) {
    return this.apiInstance.post('/cohorts/create', cohort)
      .then(({ data }) => data);
  }

  getCohortById (cohortId) {
    return this.apiInstance.get(`/cohorts/${cohortId}`)
    .then((response) => {
      return response.data
    })
  }

  deleteCohort (cohortId) {
    return this.apiInstance.delete(`/cohorts/${cohortId}`)
    .then((response) => {
      return response.data
    })
  }

  editCohort (cohort, cohortId) {
    return this.apiInstance.put (`/cohorts/${cohortId}/edit`, cohort)
    .then((response) => {
      return response.data
    })
  }
}

const CohortService = new CohortApi();

export default CohortService;