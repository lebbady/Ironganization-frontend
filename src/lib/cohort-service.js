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

const CohortService = new CohortApi();

export default CohortService;