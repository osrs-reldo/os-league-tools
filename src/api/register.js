// src/api/register.js

import axios from 'axios';

const register = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/register', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Registration of new user failed!');
  }
};

export default register;
