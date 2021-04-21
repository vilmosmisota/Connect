import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

import { Header } from "./component/header/Header";
import { HomePage } from "./pages/homePage/HomePage";
import AuthComponent from "./component/auth/AuthComponent";

import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/authActions";
import ProfilePage from "./pages/profilePage/ProfilePage";
import EditProfilePage from "./pages/profilePage/EditProfilePage/EditProfilePage";

const App = () => {
  const Auth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Auth === true || Auth === null) {
      dispatch(loadUser());
    }
  }, [Auth, dispatch]);

  const ShowAuthComponent = () => {
    if (Auth === false) {
      return <AuthComponent />;
    } else {
      return null;
    }
  };

  return (
    <Fragment>
      <ShowAuthComponent />

      <BrowserRouter>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/edit-profile" component={EditProfilePage} />
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
