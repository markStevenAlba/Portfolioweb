import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import './App.css';
import Public from './Component/Public';
import Private from './Component/Private';
import Data from './Component/Data';
import PrivateRoute from './Component/PrivateRoute';
import { Provider } from "react-redux";
import store from './Redux/store';

import Login from './components/form/Login';
import Register from './components/form/Register';


function App() {
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

  <PrivateRoute path="/login" component={Login} />
  <PrivateRoute path="/register" component={Register} />
  
  <Route 
    exact
  path="/" render={() => <Redirect to="/profile" />} />

  <Route
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
  //         isLoggedIn ? (
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


  // function PublicRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={props =>
  //         isLoggedIn ? (
  //           <Redirect
  //           to={{
  //             pathname: "/admin",
  //             state: {
  //               from: props.location,
  //             },
  //           }}
  //         />
  //         ) : (
  //           React.createElement(component, props)
  //         )
  //       }
  //     />
  //   );
  // }

}

export default App;

