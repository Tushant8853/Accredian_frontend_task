import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import profileImage from "../img/a.png";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSignUpClick = () => {
    if (name.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
      axios.post('http://localhost:8086/signup', { // Assuming you have a '/signup' endpoint for signup
        name: name,
        email: email,
        pwd: password
      })
        .then((response) => {
          if (response.data.message === 'Data inserted successfully') {
            window.location.href = '/dashboard'; // Redirect to the dashboard upon successful signup
          } else {
            setErrorMessage('Signup failed. Please check your credentials.');
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
      setErrorMessage('Please enter all required fields.');
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
        <h1>SignUp Page</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="Name"
              className="input-field"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              placeholder="New Password"
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
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
        <p className="links">
          <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
