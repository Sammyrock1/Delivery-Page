import axios from "axios";

 export const authAxios = axios.create({
  baseURL: 'https://apems-identity-dev.apems.co',
});

authAxios.defaults.headers.common['Content-Type'] = 'application/json';

 


