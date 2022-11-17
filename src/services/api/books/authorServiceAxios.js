import http from '../../http-common';

class AuthorDataService {
  getAll() {
    return http.get('/author');
  }

  get(id) {
    return http.get(`/author/${id}`);
  }

  create(data) {
    return http.post('/author', data);
  }

  update(id, data) {
    return http.put(`/author/${id}`, data);
  }

  delete(id) {
    return http.delete(`/author/${id}`);
  }

  deleteAll() {
    return http.delete(`/author`);
  }

  findByName(name) {
    return http.get(`/author?name=${name}`);
  }
}

export default new AuthorDataService();
