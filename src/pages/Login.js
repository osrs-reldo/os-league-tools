import React, { useState } from 'react';
import login from '../api/login';
import PageWrapper from '../components/PageWrapper';

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      if (data.success) {
        localStorage.setItem('authToken', data.token);
        setIsAuthenticated(true);
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <PageWrapper>
      <div className='flex justify-center items-center min-h-screen bg-primary '>
        <div className='reset-inheritance p-6 rounded shadow-md w-full max-w-md bg-accent'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Login</h2>
          <form onSubmit={handleLogin}>
            <div className='mb-4'>
              <label className='block text-sm font-medium' htmlFor='username'>
                Username
                <input
                  type='text'
                  id='username'
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                  style={{ color: '#000000' }} // Couldn't quickly discern css inheritance/layouts, hard set to black
                  className='reset-inheritance mt-1 p-2 w-full border rounded'
                />
              </label>
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium' htmlFor='password'>
                Password
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  style={{ color: '#000000' }} // Couldn't quickly discern css inheritance/layouts, hard set to black
                  className='mt-1 p-2 w-full border rounded'
                />
              </label>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button type='submit' className='w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700'>
              Login
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
