import React, { useState } from "react";
import Sidebar from "./Side Bar/SideBar";
import Topbar from "./Top Bar/Topbar";
import MainContent from "./Main Content/Downloades/Main";
import PopularBooks from "./Main Content/Popular Books/Popular";
import "./NextPage.css";

function NextPage() {
  const [currentView, setCurrentView] = useState("downloads");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="grid-layout">
      <div className="sidebar-area">
        <Sidebar onViewChange={handleViewChange} currentView={currentView} />
      </div>
      <div className="content-area">
        <Topbar />
        {currentView === "downloads" && <MainContent />}
        {currentView === "popular" && <PopularBooks />}
      </div>
    </div>
  );
}

export default NextPage;
