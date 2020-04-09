import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginDemoUser = this.loginDemoUser.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  loginDemoUser(e) {
    e.preventDefault();
    const user = {
      username: 'demo123',
      password: 'password'
    }
    this.props.demoLogin(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors.length > 0) {
      return (
        <ul className="session-error">
          {errors.map((error, i) => (<li key={`error ${i}`}>{error}</li>))}
        </ul>
      )
    }
  }

  renderSignUpMSG(formType) {
    if (formType === 'Sign up') {
      return (
        <p className="signup-msg">By signing up, you confirm that you've read and accepted our Terms of Service and Privacy Policy.</p>
      ) 
    }
  }

  renderOtherLinks(formType) {
    if (formType === 'Sign up') {
      return (
        <Link to="/login" className="other-links" onClick={this.props.clearErrors}>Already have an account? Log in</Link>
      )
    } else if (formType = "Log in") {
      return (
        <Link to="/signup" className="other-links" onClick={this.props.clearErrors}>Sign up for an account</Link>
      )
    }
  }

  render() {
    const { formType } = this.props;
    return (
      <div>
        <h1 className="header">
          <i className="fab fa-trello"></i>
          <span className="icon">Pinban</span>
        </h1>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            <p>{this.renderErrors()}</p> 
            <p className="session-title">{formType} to Pinban</p> 
            <div className="login-form">
              <br/>
              <label>
                <input 
                type="text" 
                value={this.state.username} 
                onChange={this.update('username')} 
                className="login-input"
                placeholder="Enter username"
                />
              </label>
              <br/>
              <label>
                <input 
                type="password" 
                value={this.state.password} 
                onChange={this.update('password')} 
                className="login-input" 
                placeholder="Enter password"
                />
              </label>
              {this.renderSignUpMSG(formType)}
              <input className="session-submit" type="submit" value={formType}/>
              <div className="demo-user-div">
                <button className="demo-user-login-btn" onClick={this.loginDemoUser}>Demo</button>
              </div>
            </div>
            <hr/>
            {this.renderOtherLinks(formType)} 
          </form>
        </div>
        <div className="footer-background">
          <div className="login-left">
            <img className="session-background" src={window.login_background_left}/>
          </div>
          <div className="login-right">
            <img className="session-background" src={window.login_background_right}/>
          </div>
        </div>
      </div>
    );
  };
};

export default SessionForm;