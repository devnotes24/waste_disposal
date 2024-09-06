import { getToken } from './tokenService';
import api from './api';
// import axios from 'axios';

export async function login({ email, password }) {
  try {

    const response = await api.post('regLoginRt/login', {
      email,
      password,
    }, {
      withCredentials: true // Include cookies in the request
    });
    // console.log(response.data.error);
    if (response.data.error) {
      // alert('Login failed:', response.data.error);
      // throw new Error(response.data.error); // Throw error to handle in the component
    }
    else if(response.data.success)
      {
        alert(response.data.success);
      }

    const token = getToken();
    console.log(token);
    return token;
  } catch (error) {
    console.error('There was an error logging in:', error);
    throw error; // Rethrow error to handle in the component
  }
}
