import axios from 'axios';

const api = axios.create({
  baseURL: 'http://vs-zji.anonymous.mobile.exp.direct:3333'
})

export default api;