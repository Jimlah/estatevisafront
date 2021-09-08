import http from "./base.services";

class Model {
  constructor() {
    this.path = {};
    this.response = {};
  }

  setPath(path) {
    this.path = path;
  }

  async getAll() {
    try {
      this.response = await http.get(this.path)?.data;
      return this.response;
    } catch (error) {
      if (error) {
        return error.response?.data;
      }
      return this.response;
    }
  }

  getById(id) {
    this.response = http
      .get(this.path + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    return this;
  }

  create(data) {
    this.response = http
      .post(this.path, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    return this;
  }

  update(id, data) {
    this.response = http
      .put(this.path + id, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    return this;
  }

  delete(id) {
    this.response = http
      .delete(this.path + id)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });

    return this;
  }

  get() {
    return this.response;
  }
}

export default Model;
