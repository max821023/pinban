import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign up',
    navLink: <Link to="/login">Log In</Link>
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);