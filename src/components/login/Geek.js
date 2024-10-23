import React, { useState } from 'react';
import { login } from '../../api/api';

const Geek = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const { token } = await login({ email, password });
      // Set user info if needed
      setUser({ email }); // Assuming you set the user state with basic info
    } catch (err) {
      setError(err.response.data.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin} class>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Geek;
