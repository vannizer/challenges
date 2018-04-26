import axios from 'axios'

let api
const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:3001'

const getData = res => res.data

const requests = {
  delete: url => api.delete(url).then(getData),
  get: url => api.get(url).then(getData),
  put: (url, body) => api.put(url, body).then(getData),
  post: (url, body) => api.post(url, body).then(getData),
}

const charities = {
  delete: id => requests.delete(`/charities/${id}`),
  get: id => requests.get(id ? `/charities/${id}` : '/charities'),
  update: (id, updates) => requests.put(`/charities/${id}`, updates),
  create: chartiy => requests.post('/charities', chartiy),
}
const payments = {
  delete: id => requests.delete(`/payments/${id}`),
  get: id => requests.get(id ? `/payments/${id}` : '/payments'),
  create: payment => requests.post('/payments', payment),
  update: (id, payments) => requests.put(`/payments/${id}`, payments),
}

function init({
  token = window.localStorage.getItem('token'),
  baseURL = (api && api.defaults.baseURL) || REACT_APP_API_URL,
  axiosOptions = { headers: {} },
} = {}) {
  api = axios.create({
    baseURL,
    ...axiosOptions,
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': 'application/json',
      ...axiosOptions.headers,
    },
  })
}

export { init, charities, payments }
