import React from "react";
import "./header.css";
import Logo from "../Logo/Logo";
import Dashboard from "./dashboard/Dashboard";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="dashboard-container">
          <Dashboard />
        </div>
      </div>
    </nav>
  );
};
