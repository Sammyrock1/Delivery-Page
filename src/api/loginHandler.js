import {authAxios} from './authAxios';
export const loginHandler = (data) => {
  
 return authAxios.post('/api/auth/login', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
