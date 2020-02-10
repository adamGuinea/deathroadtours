import React, { useState } from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username }) => {
  const [updateTab, setUpdateTab] = useState(false);
  const [userData, setUserData] = useState({
    username: username,
    profileImageUrl: profileImageUrl
  });

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <aside className="user">
      <img
        className="user__aside"
        src={profileImageUrl || DefaultProfileImg}
        alt={username}
      />
      <div className='user__name'>{username}</div>
      <button className="user__update" onClick={() => setUpdateTab(!updateTab)}>
        {updateTab ? 'Cancel' : 'Update Profile'}
      </button>

      {
        updateTab &&
        <div>
          <label htmlFor="username">Username:</label>
          <input
            className="form-control"
            id="username"
            name="username"
            onChange={e => handleChange(e)}
            defaultValue={username}
            type="text"
          />
          <label htmlFor="image-url">Avatar URL:</label>
          <input
            className="form-control margin-bottom"
            id="image-url"
            name="profileImageUrl"
            placeholder="not required"
            type="text"
            onChange={e => handleChange(e)}
            defaultValue={profileImageUrl}
          />

          <button className='submit'>Update</button>
        </div>
      }
    </aside>
  );
};

export default UserAside;
