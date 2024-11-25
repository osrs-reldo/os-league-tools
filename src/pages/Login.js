import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateAccountCache } from '../store/user/account';
import login from '../api/login';
import { fetchDisplayNames } from '../api/fetchDisplayNames';
import PageWrapper from '../components/PageWrapper';

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async e => {
    e.preventDefault();
    try {
      const data = await login(username, password); // Login API call
      if (data.success) {
        // Fetch display names after successful login
        let displayNames = [];
        try {
          displayNames = await fetchDisplayNames(data.username);
        } catch (fetchError) {
          console.error('Failed to fetch display names:', fetchError);
        }

        // Update Redux state with account information and display names
        dispatch(
          updateAccountCache({
            isAuthenticated: true,
            user: { username: data.username || null },
            accessToken: data.token,
            displayNames, // Store fetched display names in Redux
          })
        );

        // Optionally persist in localStorage
        localStorage.setItem('authToken', data.token);
        localStorage.setItem('username', username);

        setIsAuthenticated(true);
        navigate('/'); // Redirect after login
        toast.info('Successfully logged in!', { autoClose: 3000 });
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred while logging in.');
      console.error(err);
    }
  };

  return (
    <PageWrapper>
      <div className='flex justify-center items-center min-h-screen bg-primary'>
        <div className='p-6 rounded shadow-md w-full max-w-md bg-accent'>
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
                  style={{ color: '#000000' }}
                  className='text-area mt-1 p-2 w-full border rounded'
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
                  style={{ color: '#000000' }}
                  className='mt-1 p-2 w-full border rounded'
                />
              </label>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button type='submit' className='w-full p-2 bg-secondary'>
              Login
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
