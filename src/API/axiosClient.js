import axios from 'axios';

export const axiosClient = axios.create({
   // baseURL: 'https://5e79b4b817314d00161333da.mockapi.io',
   baseURL: 'https://web-ecommer.herokuapp.com/api',
   // headers: {
   //   'Content-Type': 'multipart/form-data', 
   // },
   headers: {
      'Content-Type': 'application/json'
   }
})