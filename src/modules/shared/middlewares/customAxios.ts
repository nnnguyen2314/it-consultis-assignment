import axios from 'axios';
import {API_URL} from "../misc/constants";

const CustomAxios = axios.create({
    baseURL: API_URL,
    responseType: 'json',
});
CustomAxios.defaults.timeout = 30000;

// Add a request interceptor
CustomAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
CustomAxios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default CustomAxios;
