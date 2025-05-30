import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// import { useUser } from './UserContext';
import { validateToken, logoutUser } from '../utils/authUtils';

const ProtectedRoute = ({ children }) => {
  // const [loading, setLoading] = useState(true);
  // const [isValid, setIsValid] = useState(false);
  // const { userData, setUserData } = useUser();

  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { valid } = await validateToken();
      if (!valid) logoutUser(navigate);
      else setIsValid(true);
    };

    checkAuth();
  }, [navigate]);

  if (isValid === null) return <div>Loading...</div>;
  return isValid ? children : <Navigate to="/" />;

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     setLoading(false);
  //     return;
  //   }

  //   fetch('http://localhost:5000/api/dashboard', {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       if (data.user) {
  //         setUserData(data.user);
  //         setIsValid(true);
  //       } else {
  //         localStorage.removeItem('token');
  //         setIsValid(false);
  //       }
  //     })
  //     .catch(() => {
  //       localStorage.removeItem('token');
  //       setIsValid(false);
  //     })
  //     .finally(() => setLoading(false));
  // }, [setUserData]);

  // if (loading) return <div>Loading...</div>;
  // if (!isValid) return <Navigate to="/" replace />;
  // return children;
};

export default ProtectedRoute;
