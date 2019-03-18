// site/src/api/index.js

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://127.0.0.1:7070'
})

export const fetchUsers = () => {
  return request.get('/api/users')
}

export const createUser = (data) => {
  return request.post('/api/users', data)
}

export const updateUser = (id, data) => {
  return request.put(`/api/users/${id}`, data)
}

export const deleteUser = (id) => {
  return request.delete(`/api/users/${id}`)
}
