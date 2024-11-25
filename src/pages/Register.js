import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import register from '../api/register';
import PageWrapper from '../components/PageWrapper';

export default function Register({ isAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  // Redirect if the user is already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      setError('You are already registered and logged in.');
      setTimeout(() => {
        navigate('/'); // Redirect to homepage after 2 seconds
      }, 2000);
    }
  }, [isAuthenticated, navigate]);

  const handleRegister = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const data = await register(username, password);
      if (data.success) {
        setShowSuccessModal(true); // Show success modal
        setTimeout(() => {
          navigate('/login'); // Redirect to login page after 2 seconds
        }, 2000);
      } else {
        setError('Registration failed');
      }
    } catch (err) {
      setError(err.message || 'An error occurred during registration');
    }
  };

  if (isAuthenticated) {
    return (
      <PageWrapper>
        <div className='flex justify-center items-center min-h-screen bg-primary'>
          <div className='p-6 rounded shadow-md w-full max-w-md bg-accent text-center'>
            <h2 className='text-2xl font-bold mb-4'>Access Denied</h2>
            <p>{error}</p>
            <p>Redirecting to the homepage...</p>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className='flex justify-center items-center min-h-screen bg-primary'>
        <div className='p-6 rounded shadow-md w-full max-w-md bg-accent'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Register</h2>
          <form onSubmit={handleRegister}>
            <div className='mb-4'>
              <label className='block text-sm font-medium' htmlFor='username'>
                Desired Username
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
                Enter your desired password.
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
              <label className='block text-sm font-medium' htmlFor='confirmPassword'>
                Please enter the desired password again.
                <input
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                  style={{ color: '#000000' }}
                  className='mt-1 p-2 w-full border rounded'
                />
              </label>
            </div>
            {error && <p className='text-red-500 text-sm'>{error}</p>}
            <button type='submit' className='w-full p-2 bg-secondary text-white rounded hover:bg-secondary-dark'>
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75 z-50'>
          <div className='bg-white p-6 rounded shadow-md text-center max-w-sm mx-auto'>
            <h3 className='text-xl font-semibold mb-4'>Registration Successful!</h3>
            <p>You will be redirected to the login page shortly.</p>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
