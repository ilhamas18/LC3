import { API } from '../../config/api';
import axios from 'axios'

export function getProfiles(payload) {
  return {
    type: 'getProfiles', payload
  }
}

export function showProfiles() {
  return (dispatch) => {
    axios({
      method: 'GET',
      url: `${API.baseURL}`
    })
    .then(({ data }) => dispatch(getProfiles(data)))
    .catch(err => console.log(err))
  }
}