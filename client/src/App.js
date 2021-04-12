import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

///components
// import Dashboard from './component/dashboard/Dashboard';
import Login from './component/login/Login';
import Register from './component/register/Register';
import { Header } from './component/header/Header';
import { HomePage } from './pages/homePage/HomePage';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolen) => {
  setIsAuthenticated(boolen);
  }

  async function isAuth () {
    try {
      
      const response = await fetch("http://localhost:3001/auth/is-verify", {
        method: "GET",
        headers: {token: localStorage.token}
      })

      const parseRes = await response.json();
      console.log(parseRes)

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);

    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(()=>{
    isAuth()
  })

  return (
    <Fragment>
      <Header />
      <HomePage />



      <BrowserRouter>
        <div className="container">
          <Switch>

            <Route 
              exact
              path="/login" 
              render={props => !isAuthenticated ? ( <Login {...props} setAuth={setAuth} /> ) :  ( <Redirect to="/dashboard"/> ) } />

            <Route 
              exact
              path="/register"
              render={props => !isAuthenticated ? ( <Register {...props} setAuth={setAuth} /> ) :  ( <Redirect to="/dashboard"/> ) } />
            
            {/* <Route
              exact
              path="/dashboard"
              render={props => isAuthenticated ? ( <Dashboard {...props} setAuth={setAuth} /> ) : ( <Redirect to="/login"/> ) } /> */}

          </Switch>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
