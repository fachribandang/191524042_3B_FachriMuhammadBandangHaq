import http from './http-common'

class LanguageDataService {
  getAll () {
    return http.get('/languages')
  }

  getById (id) {
    return http.get(`/language/id/${id}`)
  }

  getByName (name) {
    return http.get(`/language/name/${name}`)
  }

  create (data) {
    return http.post('/language', data)
  }

  update (id, data) {
    return http.put(`/language/${id}`, data)
  }

  delete (id) {
    return http.delete(`/language/${id}`)
  }
}

export default new LanguageDataService()
