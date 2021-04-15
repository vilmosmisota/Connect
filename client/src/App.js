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
  const Auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const setAuth = (boolen) => {
  // setIsAuthenticated(boolen);
  // }

  // async function isAuth () {
  //   try {

  //     const response = await fetch("http://localhost:3001/auth/is-verify", {
  //       method: "GET",
  //       headers: {token: localStorage.token}
  //     })

  //     const parseRes = await response.json();
  //     console.log(parseRes)

  //     parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

  //   } catch (error) {
  //     console.error(error.message)
  //   }
  // }

  // useEffect(()=>{
  //   isAuth()
  // })

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
