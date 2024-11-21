// src/api/login.js

import apiClient from './apiClient';

const login = async (username, password) => {
  try {
    const response = await apiClient.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : 'Login failed');
  }
};

export default login;
