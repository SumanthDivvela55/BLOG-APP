
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerSuccess, registerFailure } from '../redux/registerActions';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');

  const register = async (ev) => {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'content-type': 'application/json' },
      });
       
      if (response.status === 200) {
        dispatch(registerSuccess(username));
        alert('Registration successful');
      } else {
        dispatch(registerFailure());
        alert('Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      dispatch(registerFailure());
      alert('Registration failed');
    }
  };

  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setusername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
