import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    const { errors } = this.props;
    return (
      <ul>
        {errors.map((error, i) => (<li key={`error ${i}`}>{error}</li>))}
      </ul>
    )
  }

  render() {
    const { formType, navLink } = this.props;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Pinban!
          <br/>
          {formType} or {navLink} instead
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>Username:
              <input type="text" value={this.state.username} onChange={this.update('username')} className="login-input"/>
            </label>
            <br/>
            <label>Password:
              <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input" />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={formType}/>
          </div>
        </form>
      </div>
    );
  };
};

export default SessionForm;