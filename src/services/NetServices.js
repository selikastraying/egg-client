import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'http://localhost:7001/api/posts',
  baseURL: 'http://web:7001/api/posts',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default apiClient
