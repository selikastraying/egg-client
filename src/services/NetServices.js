import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://${window.location.hostname}:7001/api/posts`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
})

export default apiClient
