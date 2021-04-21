import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="post-icon">
        <Link to="/">
          <i class="fas fa-home"></i>
        </Link>
      </div>
      <div className="post-icon">
        <i className="fa fa-plus-circle"></i>
      </div>
      <div className="notification-icon">
        <i className="fa fa-bell"></i>
      </div>
      <div className="search-icon">
        <i className="fa fa-search"></i>
      </div>
      <div className="profile-icon_photo">
        <Link to="/profile">
          <i className="fas fa-portrait"></i>
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
