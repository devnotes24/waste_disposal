// tokenService.js
import {jwtDecode} from 'jwt-decode';

export const getToken = () => {
  // Retrieve token from cookies
  const token =  localStorage.getItem('authToken');
  // Check if the token exists
  console.log(token);
  if (token) {
    try {
      // Decode the token
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      // Check if the token is expired
      if (decoded.exp < currentTime) {
        // Token is expired, remove it from cookies
        localStorage.removeItem('authToken');
        return null; // Return null if token is expired
      }

      // Return the valid token
      return token;
    } catch (error) {
      // Handle errors in decoding the token
      console.error('Error decoding token:', error);
      localStorage.removeItem('authToken');
      return null; // Return null if there's an error
    }
  }

  // Return null if token doesn't exist
  return null;
};



// // tokenService.js
// import {jwtDecode} from 'jwt-decode';
// import Cookies from 'js-cookie';

// export const getToken = () => {

//   // const token = localStorage.getItem('authToken');
//   const token = Cookies.get('authToken');

//   if(token && token!=="undefined"){
//   const decoded = jwtDecode(token);
//   const currentTime = Date.now() / 1000;
//   if (decoded.exp < currentTime) {
//     Cookies.remove('authToken');
//   }}
//   if(token && token!=="undefined"){
//     return token;}
//   };
  
