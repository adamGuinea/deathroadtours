import React, { useState } from "react";
import { connect } from 'react-redux';
import {
  updateUser
} from "../store/actions/auth";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ currentUser, updateUser }) => {
  const [updateTab, setUpdateTab] = useState(false);
  const [userData, setUserData] = useState({
    username: currentUser.username,
    profileImageUrl: currentUser.profileImageUrl
  });

  const { username, profileImageUrl } = currentUser;

  const handleChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateUser(userData)
  }

  return (
    <aside className="user">
      <img
        className="user__image"
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

          <button onClick={() => handleSubmit()} className='submit'>Update</button>
        </div>
      }
    </aside>
  );
};


const mapStateToProps = (state) => {
  return {
  currentUser: state.currentUser.user
}}

export default connect(mapStateToProps, { updateUser })(UserAside);
