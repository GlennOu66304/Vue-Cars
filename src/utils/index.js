import axios from "axios";
import store from "../store/index";
//请求拦截
axios.interceptors.request.use((config) => {
  store.dispatch("setLoading", true);
  // headers authorization: local storgae
  if (localStorage.jwt_token) {
    config.headers.Authorization = localStorage.jwt_token;
  }

  return config;
},

//errors is responsible for the err send back from the back end api
error => {
  return Promise.reject(error);
}

);

// When the response is finish , then loading stop
//请求拦截
axios.interceptors.response.use(
  response => {
    store.dispatch("setLoading", false);
    // headers authorization: local storgae

    return response;
  },
  //errors is responsible for the err send back from the back end api
  error => {
    store.dispatch("setLoading", false);
    return Promise.reject(error);
    
  }
);
// export it

export default axios;
