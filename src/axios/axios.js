import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:44322',
    headers: {
         "Content-Type": "application/json" 
    }
});
instance.interceptors.response.use(null, error => {
    const expectedError =
      error.response &&
      error.response.status > 404 &&
      error.response.status < 500;
  
    if (expectedError) {
        console.log("An unexpected error occurrred.");
    }
  
    if (error.response.data) {
        console.log(error.response.data);
    }
  
    return Promise.reject(error);
  });
export default instance;