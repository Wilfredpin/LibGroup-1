import React, { useState, useEffect } from "react";
import Sidebar from "./Side Bar/SideBar";
import Topbar from "./Top Bar/Topbar";
import MainContent from "./Main Content/Downloades/Main";
import PopularBooks from "./Main Content/Popular Books/Popular";
import "./NextPage.css";
import { useUser } from '../UserContext';

function NextPage() {
  const [currentView, setCurrentView] = useState("downloads");
  const { userData, setUserData } = useUser();

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    fetch('http://localhost:5000/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) setUserData(data.user);
        else console.error("Failed to load dashboard data", data.message);
      })
      .catch(err => console.error("Dashboard fetch error", err));
  }, [setUserData]);

  return (
    <div className="grid-layout">
      <div className="sidebar-area">
        <Sidebar onViewChange={handleViewChange} currentView={currentView}  user={userData}/>
      </div>
      <div className="content-area">
        <Topbar  user={userData}/>
        {currentView === "downloads" && <MainContent  user={userData}/>}
        {currentView === "popular" && <PopularBooks />}
      </div>
    </div>
  );
}

export default NextPage;
