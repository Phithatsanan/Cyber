import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: "http://kittitat.trueddns.com:45136/api", // Adjust as necessary
  withCredentials: true, // Required for cookies
});
