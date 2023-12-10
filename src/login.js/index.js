import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import profileImage from "../img/a.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleLoginClick = () => {
    if (email.trim() !== '' && password.trim() !== '') {
      axios.post('http://localhost:8086/login', {
        email: email, // Corrected property names
        pwd: password // Corrected property names
      })
        .then((response) => {
          if (response.data.authenticated) {
            window.location.href = '/dashboard'; // Redirect to dashboard on successful login
          } else {
            setErrorMessage('Login failed. Please check your Email and Password.');
            setShowErrorMessage(true);
            setTimeout(() => {
              setShowErrorMessage(false);
              setErrorMessage('');
            }, 2000);
          }
        })
        .catch((error) => {
          console.error('Error sending request to server: ' + error.message);
        });
    } else {
      setErrorMessage('Please enter both email and password.');
      setShowErrorMessage(true);
      setTimeout(() => {
        setShowErrorMessage(false);
        setErrorMessage('');
      }, 2000);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="profile-image">
          <img src={profileImage} alt="profile" className="profile" />
        </div>
        <h1>Login Page</h1>
        <div>
          <div>
            <input
              type="email"
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
        {showErrorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
        <div className="login-button">
          <button onClick={handleLoginClick}>Login</button>
        </div>
        <p className="links">
          <Link to="/forgot-password">Forgot password</Link> or <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
