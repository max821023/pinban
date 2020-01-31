import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {

  render() {
    const { currentUser, logout } = this.props
    return (
    <hgroup className = "header-group" >
      <div className="navbar">
        <div className="center">
          <i className="fab fa-trello"></i>
          <span className="icon">Pinban</span>
        </div>
      </div>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup >
    );
  }
};

export default Greeting;