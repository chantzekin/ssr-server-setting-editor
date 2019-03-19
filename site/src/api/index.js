// site/src/api/index.js

import axios from 'axios'

axios.defaults.timeout = 15000
axios.defaults.baseURL = 'http://localhost:7070'

axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error.response)
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
