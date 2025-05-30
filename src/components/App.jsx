import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import BasicExample from './Second Page/TargetPage';
import NextPage from './Final Page/NextPage';
// import Profile from './Final Page/Profile';
import BlankPage from './BlankPage';
import ProtectedRoute from './ProtectedRoute';
import { UserProvider } from './UserContext';

function App() {
  return (
    <UserProvider>
      <Router basename="/LibGroup-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/target" element={<BasicExample />} />
          <Route path="/blank" element={<BlankPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <NextPage />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          /> */}
          <Route path="*" element={<div>404 Page Not Found</div>} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
