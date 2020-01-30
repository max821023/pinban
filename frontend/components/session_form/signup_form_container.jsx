import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { clearSessionErrors } from '../../actions/session_actions';

const mSTP = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign up'
  };
};

const mDTP = dispatch => {
  return {
    processForm: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors())
  };
};

export default connect(mSTP, mDTP)(SessionForm);