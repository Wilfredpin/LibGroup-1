import { useNavigate, useLocation } from 'react-router-dom';
import './Target.css';
import React, { useState, useEffect } from 'react';
import fineass from './Group 1.png';
import { getToken, setToken } from '../../utils/authUtils';

function BasicExample() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = getToken();

    if (token) navigate('/dashboard');
  }, [navigate]);

  const [isSignUp, setIsSignUp] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [rememberMe, setRememberMe] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const mode = params.get('mode');
    if (mode === 'signin') setIsSignUp(false);
  }, [location]);

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

  // Form validation function
  const validateForm = () => {
    if (isSignUp && !formData.name.trim()) {
      alert('Name is required.');
      return false;
    }
    if (!formData.email.trim() || !formData.password.trim()) {
      alert('Email and password are required.');
      return false;
    }
    return true;
  };

  // Reusable function for registration and login
  const handleSubmit = async () => {
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

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

        if (data.token) setToken(data.token);

        navigate('/dashboard');
      } else {
        setFormData({ ...formData, password: '' });
        alert(data.message || 'An error occurred.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('A server error occurred.');
    }
    setLoading(false);
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
              {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
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
