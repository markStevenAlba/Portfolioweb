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
        {/* <h1>REACT-REDUX BOILERPLATE WITH THUNK MIDDLEWARE</h1> */}
        <Router>
        {/* <div>
          <p><Link to="/public">public</Link></p>
          <p><Link to="/data">Data</Link></p>
          <p><Link to="/private">private</Link></p> */}
            <Switch>
  
  {/* <Route
    exact
    path="/admin"
    render={() => <Redirect to="/admin/dashboard" />}
  /> */}
  

  {/* <PrivateRoute path="/" component={Layout} /> */}

  {/* <PublicRoute path="/login" component={Login} /> */}
  {/* <PublicRoute path="/signup" component={Signup} /> */}
  {/* <PrivateRoute path="/admin" component={AdminLayout} /> */}
  {/* <PrivateRoute path="/admin" component={TestLayout} /> */}

  {/* <PrivateRoute
    exact
    path="/"
    component={Public}
  />   */}
    
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
    // exact
    path="/profile"
    component={Public}
  />  

 
  
  <Route component={Error} />
</Switch>
        {/* </div> */}
      </Router>
      </div>
      </Provider>
  );

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isAuth ? (
  //           React.createElement(component, props)
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: {
  //                 from: props.location,
  //               },
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }

}

export default App;

