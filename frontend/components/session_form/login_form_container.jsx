import { connect } from 'react-redux';
import React from 'react';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: 'Log in'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mSTP, mDTP)(SessionForm);