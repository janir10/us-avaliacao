 import axios from 'axios';

 const api = axios.create({
    baseURL : '',
    timeout: 1000,
    headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      },
    
 });

 export default api;
