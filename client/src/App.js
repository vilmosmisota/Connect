import React, { Fragment, useEffect } from "react";
import "./App.css";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./component/login/Login";
import Register from "./component/register/Register";
import { Header } from "./component/header/Header";
import { HomePage } from "./pages/homePage/HomePage";
import Logout from "./component/logout/logout";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/authActions";

const App = () => {
  const Auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();


  useEffect(() => {
    if (Auth === true) {
      dispatch(loadUser());
    }
  }, [Auth]);

  console.log(Auth);
  return (
    <Fragment>
      <Header />
      <HomePage />

      <Login />
      <Register />
      <Logout />
    </Fragment>
  );
};

export default App;
