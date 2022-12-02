import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import Public from './Component/Public';
import { Provider, useSelector } from "react-redux";
import Login from './Component/Login/Login';
import PrivateRoute from './Component/PrivateRoute';
import jwtDecode from 'jwt-decode';

import store from './Redux/store';

import {logout, getUserData} from "./Redux/Actions/authAction";


const token = localStorage.idToken;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = "/";
  } else {
    store.dispatch(getUserData());
  }
}

function App() {
  // const { isAuth } = useSelector(a => a.auth);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
            <Switch>
  <PrivateRoute
    path="/login"
    component={Login}
  />  
     <Route
    exact
    path="/"
    render={() => <Redirect to="/profile" />}
  /> 
  <Route
    path="/profile"
    component={Public}
  />  
  <Route component={Error} />
</Switch>
      </Router>
      </div>
      </Provider>
  );
}

export default App;

