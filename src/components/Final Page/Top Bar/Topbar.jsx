import React from "react";
import "./Topbar.css";
import profile from "./pexels-lap-dinh-quoc-728742807-18821587.jpg";

const Topbar = () => {
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
        <span className="username">Sarah Bell</span>
        <img src={profile} alt="User" className="avatar" />
      </div>
    </div>
  );
};

export default Topbar;
