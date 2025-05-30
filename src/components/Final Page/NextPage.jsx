import React, { useState, useEffect } from 'react';

import Sidebar from './Side Bar/SideBar';
import Topbar from './Top Bar/Topbar';

import MainContent from './Main Content/Downloades/Main';
import Collections from './Main Content/Popular Books/Collections';
import PopularBooks from './Main Content/Popular Books/PopularBooks';
import BookUpload from './BookUpload';
import BulkUpload from './BulkUpload';
import Profile from './Profile';

import './NextPage.css';
import { useUser } from '../UserContext';
import { getToken } from '../../utils/authUtils';

function NextPage() {
  const [currentView, setCurrentView] = useState('downloads');
  const { userData, setUserData } = useUser();

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  useEffect(() => {
    const token = getToken();
    if (!token) return;

    fetch('http://localhost:5000/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) setUserData(data.user);
        else console.error('Failed to load dashboard data', data.message);
      })
      .catch((err) => console.error('Dashboard fetch error', err));
  }, [setUserData]);

  return (
    <div className="grid-layout">
      <div className="sidebar-area">
        <Sidebar
          onViewChange={handleViewChange}
          currentView={currentView}
          user={userData}
        />
      </div>
      <div className="content-area">
        <Topbar user={userData} />
        {currentView === 'downloads' && <MainContent user={userData} />}
        {currentView === 'collections' && (
          <Collections onViewChange={handleViewChange} />
        )}
        {currentView === 'popular' && (
          <PopularBooks onViewChange={handleViewChange} user={userData} />
        )}
        {currentView === 'profile' && <Profile user={userData} />}
        {currentView === 'upload' && <BookUpload />}
        {currentView === 'bulk_upload' && <BulkUpload />}
      </div>
    </div>
  );
}

export default NextPage;
