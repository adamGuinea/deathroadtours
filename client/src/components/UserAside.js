import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import {
  updateUser
} from "../store/actions/auth";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ currentUser, updateUser }) => {
  const [storedUsername, setStoredUsername] = useState(null)
  const [storedImage, setStoredImage] = useState(null)
  const [updateTab, setUpdateTab] = useState(false);
  const [userData, setUserData] = useState({
    username: currentUser.username,
    profileImageUrl: currentUser.profileImageUrl
  });

  useEffect(()=> {
    let storedUsername = localStorage.getItem('localUsername');
    let storedImage = localStorage.getItem('localImage');
    setStoredUsername(storedUsername)
    setStoredImage(storedImage)
  })

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateUser(userData)
    setUpdateTab(false)
    localStorage.setItem('localUsername', userData.username)
    localStorage.setItem('localImage', userData.profileImageUrl)
  }

  return (
    <aside className="user">
      <img
        className="user__image"
        src={storedImage ? storedImage : currentUser.profileImageUrl || DefaultProfileImg}
        alt={storedUsername || currentUser.username}
      />
      <div className='user__name'>{storedUsername ? storedUsername : currentUser.username}</div>
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
            defaultValue={storedUsername || currentUser.username}
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
            defaultValue={storedImage || currentUser.profileImageUrl}
          />

          <button onClick={() => handleSubmit()} className='submit'>Update</button>
        </div>
      }
    </aside>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.user
  }
}

export default connect(mapStateToProps, { updateUser })(UserAside);
