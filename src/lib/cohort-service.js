import axios from 'axios';

class CohortApi {
  constructor() {
    this.apiInstance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/api`,
    });
  }


  getAllCohorts() {
    return this.apiInstance.get('/cohorts')
    .then((response) => {
      return response.data
    })
  }

  createCohort (cohort) {
    const { language, category, startingDate, endingDate } = cohort;
    return this.apiInstance.post('/cohorts/create', {language, category, startingDate, endingDate})
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
}

const CohortService = new CohortApi();

export default CohortService;