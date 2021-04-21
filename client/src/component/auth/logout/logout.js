import React from "react";
import "./logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/authActions";

const Logout = () => {
  const dispatch = useDispatch();

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      dispatch(logout());
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <button className="logout-btn" onClick={(e) => handleOnClick(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
