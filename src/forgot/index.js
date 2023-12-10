import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from "../img/a.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      window.location.href = '/dashboard';
    } else {
      alert('Please enter both email and password.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="profile-image">
          <img src={profileImage} alt="profile" className="profile" />
        </div>
        <h1>Forgot Page</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="login-button">
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <p className="links">
          <Link to="/">Home</Link> or <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
