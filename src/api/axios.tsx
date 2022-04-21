import axios from 'axios';
export const basePath = axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
// @ts-ignore
axios.defaults.headers['Content-Type'] = 'application/json';

export default axios;
