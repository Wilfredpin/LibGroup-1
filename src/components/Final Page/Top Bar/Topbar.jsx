import React from 'react';
import './Topbar.css';

const Topbar = ({ user }) => {
  return (
    <div className="topbar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>

      <div className="topbar-right">
        <img
          src="https://img.icons8.com/ios-filled/20/9c27b0/appointment-reminders.png"
          alt="Notification"
          className="icon"
        />
        <span className="username">{user?.name}</span>
        <img
          src={
            user?.profile_picture
              ? `http://localhost:5000${user.profile_picture}`
              : 'default.png'
          }
          alt="User"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Topbar;
