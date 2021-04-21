import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import Logout from "../auth/logout/logout";
import { useSelector } from "react-redux";

const Profile = () => {
  // const userName = useSelector((state) => state.auth.user.user_name);

  return (
    <section className="profile-page-container">
      <div className="profile-details-container">
        <div className="edit-profile-msg">
          <h1>Hello userName,</h1>
          <p>
            In order to be able using the platform, you need to set up your
            profile page.
          </p>
          <Link to="/edit-profile">
            <button>Setup Profile Page</button>
          </Link>
        </div>
      </div>
      <div className="edit-profile-container">
        <Link to="/edit-profile">
          <button>Edit</button>
        </Link>
        <Logout />
      </div>
    </section>
  );
};

export default Profile;
