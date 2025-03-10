// The Token Manager:
//     You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

// Solution:
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
 function setAuthToken(token) {
    const expirationTime = dayjs().add(365, 'day').format(' DD MMM YYYY');
    localStorage.setItem('authToken', JSON.stringify({ token, expirationTime }));
 }
 setAuthToken("fasdf")
 console.log(localStorage.getItem('authToken')) 