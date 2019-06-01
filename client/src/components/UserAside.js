import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username }) => (
  <aside>
    <img
      className="user-aside"
      src={profileImageUrl || DefaultProfileImg}
      alt={username}
    />
  </aside>
);

export default UserAside;
