import React from 'react';
import './Sidebar.css';
import { logoutUser } from '../../../utils/authUtils';

import { useNavigate } from 'react-router-dom';

const Sidebar = ({ onViewChange, currentView, user }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser(navigate);
  };

  // const handleProfileClick = () => navigate('/profile');

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img
          src={
            user?.profile_picture
              ? `http://localhost:5000${user.profile_picture}`
              : 'default.png'
          }
          alt="Profile"
          className="profile-pic"
        />
        <p className="welcome-text">Welcome Back</p>
        <h2 className="user-name">{user?.name}</h2>
      </div>

      <div className="nav-links">
        <div
          className={`nav-item ${currentView === 'downloads' ? 'active' : ''}`}
          onClick={() => onViewChange('downloads')}
        >
          <div className="icon">K</div>
          <span>My Kortext Board</span>
        </div>

        <div
          className={`nav-item ${currentView === 'collections' ? 'active' : ''}`}
          onClick={() => onViewChange('collections')}
        >
          <img
            src="https://img.icons8.com/ios-filled/20/000000/book.png"
            alt="Popular Books"
          />
          <span>Collections</span>
        </div>
        <div className="nav-item">
          <img
            src="https://img.icons8.com/ios-filled/20/000000/bookmark-ribbon.png"
            alt="Saved"
          />
          <span>Saved</span>
        </div>
        <div
          className={`nav-item ${currentView === 'profile' ? 'active' : ''}`}
          onClick={() => onViewChange('profile')}
        >
          <img
            src="https://img.icons8.com/ios-filled/20/000000/user.png"
            alt="Profile"
          />
          <span>Profile</span>
        </div>

        <div
          className={`nav-item ${currentView === 'upload' ? 'active' : ''}`}
          onClick={() => onViewChange('upload')}
        >
          <img
            src="https://img.icons8.com/ios-filled/20/000000/upload.png"
            alt="Upload"
          />
          <span>Book Upload</span>
        </div>
        
        {/* <div
          className={`nav-item ${
            currentView === 'bulk_upload' ? 'active' : ''
          }`}
          onClick={() => onViewChange('bulk_upload')}
        >
          <img
            src="https://img.icons8.com/ios-filled/20/000000/upload.png"
            alt="Upload"
          />
          <span>Bulk Upload</span>
        </div> */}

        <div
          className="nav-item logout"
          onClick={handleLogout}
          style={{ cursor: 'pointer' }}
        >
          <img
            src="https://img.icons8.com/ios-filled/20/fa314a/logout-rounded-left.png"
            alt="Logout"
          />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
