import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions";

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
      <button onClick={(e) => handleOnClick(e)}>logout</button>
    </div>
  );
};

export default Logout;
