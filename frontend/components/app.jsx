import React from 'react';
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import LoginFormContainer from './session_form/login_container';
import SignupFormContainer from './session_form/signup_container';
import MainContainer form './main/main_container';

const App = () => {
  return (
    <div id="App">
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path ="/" component={MainContainer} />
    </div>
  )
};

export default App;

// start with authroute loginformcontainer if not logged in
// use "/login"
// put signup route here too but after loginform
//else protected route is main container
