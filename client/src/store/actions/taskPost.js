import axios from 'axios';
import { API } from '../../config/api';

export function TaskPost(data) {
  return () => {
    axios({
      method: 'POST',
      url: `${API.baseURL}`,
      data: data
    })
    .then(() => console.log('success'))
    .catch(err => console.log(err))
  }
}
