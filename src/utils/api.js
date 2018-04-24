import fetch from 'isomorphic-fetch'

let api
const REACT_APP_API_URL =
  process.env.REACT_APP_API_URL || 'http://localhost:3001'

const cleanObj = obj => JSON.parse(JSON.stringify(obj))
const getData = res => res.json()

const requests = {
  delete: url =>
    api({
      method: 'DELETE',
      url,
    }).then(getData),
  get: url =>
    api({
      method: 'GET',
      url,
    }).then(getData),
  put: (url, body) =>
    api({
      method: 'PUT',
      url,
      body,
    }).then(getData),
  post: (url, body) =>
    api({
      method: 'POST',
      url,
      body,
    }).then(getData),
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

function init({ token = window.localStorage.getItem('token') } = {}) {
  api = ({ url = '', body, ...options }) =>
    fetch(
      REACT_APP_API_URL + url,
      cleanObj({
        headers: {
          authorization: token ? `Bearer ${token}` : undefined,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
        ...options,
      }),
    )
}

export { init, charities, payments }
