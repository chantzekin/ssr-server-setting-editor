// site/src/api/index.js

import axios from 'axios'

axios.defaults.timeout = 15000
axios.defaults.baseURL = 'http://65.49.193.118:7070'

axios.interceptors.response.use(
  response => response,
  error => {
    return Promise.reject(error.response)
  }
)

export const fetchUsers = () => {
  return axios.get('/api/users')
}

export const createUser = (data) => {
  return axios.post('/api/users', data)
}

export const updateUser = (id, data) => {
  return axios.put(`/api/users/${id}`, data)
}

export const deleteUser = (id) => {
  return axios.delete(`/api/users/${id}`)
}

export const callAction = (action) => {
  return axios.post(`/api/call/${action}`)
}
