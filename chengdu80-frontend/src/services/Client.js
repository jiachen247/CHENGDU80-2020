import axios from "axios";

// const API_ROOT = process.env.BACKEND_URL || "http://a7129834fc77.ngrok.io/";
const API_ROOT = process.env.BACKEND_URL || "http://localhost:8080/";
const TIMEOUT = 20000;
const HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

class Client {
  constructor({
    baseURL = API_ROOT,
    timeout = TIMEOUT,
    headers = HEADERS,
    auth,
  }) {
    const client = axios.create({
      baseURL,
      timeout,
      headers,
      auth,
    });

    client.interceptors.response.use(this.handleSuccess, this.handleError);
    this.client = client;
  }

  handleSuccess(response) {
    return response;
  }

  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.client.get(path).then((response) => response.data);
  }

  post(path, payload) {
    return this.client.post(path, payload).then((response) => response.data);
  }

  put(path, payload) {
    return this.client.put(path, payload).then((response) => response.data);
  }

  patch(path, payload) {
    return this.client.patch(path, payload).then((response) => response.data);
  }

  delete(path) {
    return this.client.delete(path).then((response) => response.data);
  }
}

export default Client;
