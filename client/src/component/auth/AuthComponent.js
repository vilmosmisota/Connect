import React, { useState } from "react";
import "./authComponent.css";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import Login from "./login/Login";
import Register from "./register/Register";

const AuthComponent = () => {
  const [login, setLogin] = useState(false);

  const handleOnclick = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const ShowForm = () => {
    if (!login) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  const ShowMessage = () => {
    if (!login) {
      return (
        <section className="have-account">
          <p>Join the community!</p>
          <button onClick={handleOnclick}>JOIN</button>
        </section>
      );
    } else {
      return (
        <section className="have-account">
          <p>Already on Connect?</p>
          <button onClick={handleOnclick}>LOGIN</button>
        </section>
      );
    }
  };

  return (
    <div className="auth-container">
      <section className="auth-header">
        <div>
          <Logo />
        </div>
        <div>
          <h1>
            A PLACE WHERE PHOTOGRAPHERS AND OUTDOOR ATHLETES
            <span> CONNECT</span> AND <span>CREATE</span>
          </h1>
        </div>
      </section>
      <section className="auth-details">
        <ShowForm />
        <ShowMessage />
      </section>
    </div>
  );
};

export default AuthComponent;
