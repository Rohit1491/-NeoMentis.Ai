import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" />
        
        <label>Password:</label>
        <input type="password" name="password" />
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
