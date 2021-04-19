import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <section className="dashboard">
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
        <i className="fas fa-portrait"></i>
      </div>
    </section>
  );
};

export default Dashboard;
