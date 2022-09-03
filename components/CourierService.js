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
    const perPage = 20
    // console.log('getSummary: ', state.page)
    if (state.page == 1) {
      return apiClient.get('/summary?areaId=1')
    } else {
      return apiClient.get('/summary?areaId=2')
    }
  },
}
