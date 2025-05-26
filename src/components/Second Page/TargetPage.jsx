import { useNavigate } from 'react-router-dom';
import './Target.css';
import React, { useState, useEffect } from 'react';
import fineass from './Group 1.png';

function BasicExample() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/dashboard');
  }, [navigate]);

  // Toggle between signup and login mode
  const [isSignUp, setIsSignUp] = useState(true);

  // State to store user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Reusable function for registration and login
  const handleSubmit = async () => {
    try {
      const endpoint = isSignUp ? 'register' : 'login';
      const payload = isSignUp
        ? formData
        : { email: formData.email, password: formData.password };

      const response = await fetch(`http://localhost:5000/api/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok) {
        alert(data.message);

        if (data.token) {
          localStorage.setItem('token', data.token);
        }

        navigate('/dashboard');
      } else {
        alert(data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('A server error occurred.');
    }
  };

  return (
    <div className="body">
      <div className="container2">
        <div className="text-box">
          <div className="header">
            <div className="text">
              <h4>Kortext</h4>
              <h2>{isSignUp ? 'Get Started' : 'Welcome Back'}</h2>
              <p>
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"}{' '}
                <span
                  style={{ cursor: 'pointer', color: 'blue' }}
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </span>
              </p>
            </div>
            <div className="underline"></div>
          </div>

          <div className="inputs">
            {isSignUp && (
              <div className="input">
                <h6>Name</h6>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
            )}
            <div className="input">
              <h6>Email</h6>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="input">
              <h6>Password</h6>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="submit-container">
            <div
              className="submit"
              onClick={handleSubmit}
              style={{ cursor: 'pointer' }}
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </div>
          </div>

          {!isSignUp && (
            <div className="forgot-password">
              Forgot Password? <span>Click Here!</span>
            </div>
          )}
        </div>

        <div className="image">
          <img src={fineass} alt="back" />
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
