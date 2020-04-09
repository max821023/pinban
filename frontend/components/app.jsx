import React from "react";
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Splash from "./splash/splash";
import BoardIndexContainer from "./board/board_index_container";
import BoardShowContainer from './board/board_show_container';
import Modal from './modal/modal';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
  Route
} from 'react-router-dom';
import greeting_container from "./greeting/greeting_container";


const App = () => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute path="/" component={greeting_container}/>
    <ProtectedRoute exact path="/boards" component={BoardIndexContainer}/>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/boards/:boardId" component={BoardShowContainer}/>
    <Modal />
  </div>
);

export default App;