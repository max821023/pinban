import React from "react";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from "./splash/splash";
import BoardIndexContainer from "./board/board_index_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route
} from 'react-router-dom';


const App = () => (
  <div>
    <ProtectedRoute exact path="/boards" component={BoardIndexContainer}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/" component={Splash} />
  </div>
);

export default App;