import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDropDown: false }
  }

  render() {
    const { currentUser, logout } = this.props
    console.log(this.state.showDropDown);
    return (
    <div className = "header-group" >
      <div className="navbar">
        <div className="left-side">
          <i className="material-icons">home</i>
        </div>
        <div className="center">
          <i className="fab fa-trello"></i>
          <span className="icon">Pinban</span>
        </div>
        <div className="right-side">
          <p className="initials" onClick={() => this.setState({ showDropDown: !this.state.showDropDown})}>ML</p>
            {this.state.showDropDown && <div>drop down content</div>}
        </div>
      </div>
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div >
    );
  }
};

export default Greeting;