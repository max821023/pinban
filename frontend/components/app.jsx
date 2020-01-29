import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';
import {
  Route
} from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1><i class="fab fa-trello"></i>PINBAN</h1>
      <Route exact path="/" component={GreetingContainer}/>
    </header>

    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;