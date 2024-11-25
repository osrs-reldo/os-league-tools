// src/api/register.js

import apiClient from './apiClient';

const register = async (username, password) => {
  try {
    const response = await apiClient.post('/register', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Registration of new user failed!');
  }
};

export default register;
