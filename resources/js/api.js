import axios from 'axios';

// User相關的 api
const userRequest = axios.create({
  baseURL: '/api/v1/user/'
});


export const apiUserLogin = data => userRequest.post('/login', data);
export const apiUserLogout = data => userRequest.post('/logout', data);
export const apiUserAthenticated = () => userRequest.get('/athenticated');
