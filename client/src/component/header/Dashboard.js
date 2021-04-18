import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./dashboard.css";
import { loadUser } from "../../redux/actions/authActions";

const Dashboard = () => {
  const Auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadUser());
  // }, []);

  // console.log(Auth);

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
