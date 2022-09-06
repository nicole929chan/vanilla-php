const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'content-type': 'application/x-www-form-urlencoded',
  },
})

export default {
  getAreas() {
    return apiClient.get('/areas')
  },

  getStatuses() {
    return apiClient.get('/statuses')
  },

  getSummary(state) {
    return apiClient.get('/summary')
  },

  getDrivers() {
    return apiClient.get('/drivers')
  },
}
