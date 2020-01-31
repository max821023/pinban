import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showDropDown: false }
  }

  render() {
    const { currentUser, logout } = this.props
    return (
    <div className = "header-group" >
      <div className="navbar">
        <div className="left-side">
          <i className="material-icons">
            <Link to="/boards">home</Link>
          </i>
        </div>
        <div className="center">
          <i className="fab fa-trello"></i>
          <span className="icon">
            <Link to="/boards">Pinban</Link>
          </span>
        </div>
        <div className="right-side">
          <p className="initials" onClick={() => this.setState({ showDropDown: !this.state.showDropDown})}>{currentUser.username[0].toUpperCase()}</p>
          {this.state.showDropDown && <div className="dropdown">
            <ul>
              <li className="dropdownName">{currentUser.username}</li>
              <li><hr /></li>
              <li><button className="header-button" onClick={logout}>Log Out</button></li>
            </ul>
          </div>}
        </div>
      </div>
    </div >
    );
  }
};

export default Greeting;