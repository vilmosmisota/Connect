import React, { Fragment, useEffect } from "react";
import "./App.css";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./component/header/Header";
import { HomePage } from "./pages/homePage/HomePage";
import AuthComponent from "./component/auth/AuthComponent";

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

  const ShowAuthComponent = () => {
    if (!Auth) {
      return <AuthComponent />;
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <ShowAuthComponent />
      <Header />
      <HomePage />
    </Fragment>
  );
};

export default App;
