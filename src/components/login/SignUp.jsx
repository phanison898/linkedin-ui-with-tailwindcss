import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../backend/api';
import {signupSuccess} from '../../store/reducers/auth';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

     setError(null);

    // Check if passwords match before making the signup request
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Make the signup request
      const response = await signup({ firstName, lastName, email, password });
      const { token, user } = response;
      dispatch(signupSuccess({token,user}));
    } catch (error) {
      setError(error.message || 'Sign Up Failed');
    }
  };

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-blue-200'>
      <form
        onSubmit={handleSubmit}
        className='w-1/4 h-auto flex flex-col items-center gap-10 rounded-lg shadow-md p-5 bg-white'
      >
        <label className="w-full flex justify-center items-center">LinkedIn SignUp Form</label>
        <input
          className="form-input"
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="form-input"
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          className="form-input"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className='text-red-500'>{error}</p>}
        <button className="form-input bg-blue-500 text-white font-medium" type="submit">
          Sign-Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
