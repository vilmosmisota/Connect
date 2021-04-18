import React, { useEffect } from "react";
import "./header.css";

import { useDispatch, useSelector } from "react-redux";
import { loadUser, register } from "../../redux/actions/authActions";
import Dashboard from "./Dashboard";

export const Header = () => {
  const Auth = useSelector((state) => state.auth);

  const ShowSomething = () => {
    if (!Auth.isAuthenticated) {
      return (
        <div>
          <p>register</p>
          <p>sign-in</p>
        </div>
      );
    }
    if (Auth.isAuthenticated) {
      return <Dashboard />;
    }
  };

  return (
    <nav>
      <div className="logo">
        <p>CONNECT</p>
      </div>
      <div className="dashboard-container">
        {/* <Dashboard /> */}
        <ShowSomething />
      </div>
    </nav>
  );
};
