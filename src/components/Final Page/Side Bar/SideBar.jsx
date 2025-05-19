import React from "react";
import "./Sidebar.css";
import Profile from "./pexels-lap-dinh-quoc-728742807-18821587.jpg";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ onViewChange, currentView }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data from localStorage/sessionStorage
    localStorage.clear();
    sessionStorage.clear();
    // Redirect to home or login page
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src={Profile} alt="Profile" className="profile-pic" />
        <p className="welcome-text">Welcome Back</p>
        <h2 className="user-name">Sarah</h2>
      </div>

      <div className="nav-links">
        <div
          className={`nav-item ${currentView === "downloads" ? "active" : ""}`}
          onClick={() => onViewChange("downloads")}
        >
          <div className="icon">K</div>
          <span>My Kortext Board</span>
        </div>

        <div
          className={`nav-item ${currentView === "popular" ? "active" : ""}`}
          onClick={() => onViewChange("popular")}
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
        <div className="nav-item">
          <img
            src="https://img.icons8.com/ios-filled/20/000000/user.png"
            alt="Profile"
          />
          <span>Profile</span>
        </div>
        <div
          className="nav-item logout"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
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
