import React, { useState, useEffect } from 'react';
import { useUser } from '../UserContext';
import { getToken } from '../../utils/authUtils';
import './Profile.css';

const Profile = () => {
  const { userData, setUserData } = useUser();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const defaultPic = 'default.png';

  useEffect(() => {
    if (userData) {
      setUsername(userData.name || '');
      setEmail(userData.email || '');
      setProfilePic(userData.profile_picture || null);
    }
  }, [userData]);

  useEffect(() => {
    if (!profilePic) {
      setPreview(defaultPic);
    } else {
      setPreview(`http://localhost:5000${profilePic}`);
    }
  }, [profilePic]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('profilePic', selectedFile);
    formData.append('userId', userData.id);

    const res = await fetch('http://localhost:5000/api/upload-profile', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setProfilePic(data.imageUrl);
      // Update context with new image
      setUserData({ ...userData, profile_picture: data.imageUrl });
    }
  };

  const handleSaveChanges = async () => {
    const res = await fetch(`http://localhost:5000/api/update-user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ id: userData.id, username, email }),
    });

    const data = await res.json();
    console.log(data);

    if (res.ok) {
      alert('Profile updated!');
      // Update context with new username and email
      setUserData({ ...userData, username, email });
    }
  };

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>

      <div className="profile">
        <img src={preview} alt="Profile" />
        <div>
          <input type="file" onChange={handleFileChange} />
          {selectedFile && <button onClick={handleUpload}>Upload</button>}
        </div>
      </div>
      <br />
      <br />
      <div className="profile-details">
        <label>Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default Profile;
