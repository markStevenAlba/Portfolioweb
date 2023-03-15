import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const { isAuth } = useSelector(a => a.auth);
    // check your authentication here. 
    // For example : cookied.get(), localStorage.get() etc...
    // set isLogin -> true/false 
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        <Route {...rest} render={props => (
            !isAuth ?
                <Component {...props} />
            : 
            <Redirect to="/profile" />
        )} />
    );
};

export default PrivateRoute;


