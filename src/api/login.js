// src/api/login.js

import axios from 'axios';

const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};

export default login;
